import { randomUUID } from 'node:crypto';
import { createServer } from 'node:http';
import type { Server } from 'node:http';
import { URL } from 'node:url';
import { google } from 'googleapis';
import open from 'open';
import * as dotenv from 'dotenv';

dotenv.config();

async function main(): Promise<void> {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUri = process.env.OAUTH_REDIRECT_URI || 'http://localhost:3001/oauth2callback';
  const callbackTimeoutMs = Number(process.env.OAUTH_CALLBACK_TIMEOUT_MS || 300000);

  if (!clientId || !clientSecret) {
    throw new Error('Defina GOOGLE_CLIENT_ID e GOOGLE_CLIENT_SECRET no arquivo .env.');
  }
  if (!Number.isFinite(callbackTimeoutMs) || callbackTimeoutMs <= 0) {
    throw new Error('OAUTH_CALLBACK_TIMEOUT_MS deve ser um número positivo em milissegundos.');
  }

  const callbackUrl = new URL(redirectUri);
  const allowedHosts = new Set(['localhost', '127.0.0.1', '[::1]']);
  if (callbackUrl.protocol !== 'http:' || !allowedHosts.has(callbackUrl.hostname)) {
    throw new Error('OAUTH_REDIRECT_URI deve usar HTTP e apontar para localhost ou um IP de loopback.');
  }

  const port = Number(callbackUrl.port || 80);
  const host = callbackUrl.hostname.replace(/^\[|\]$/g, '');
  const state = randomUUID();
  const oauthClient = new google.auth.OAuth2(clientId, clientSecret, redirectUri);
  const authorizationUrl = oauthClient.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: ['https://www.googleapis.com/auth/calendar'],
    state
  });

  let resolveCode!: (code: string) => void;
  let rejectCode!: (error: Error) => void;
  const authorizationCode = new Promise<string>((resolve, reject) => {
    resolveCode = resolve;
    rejectCode = reject;
  });

  const server = createServer((request, response) => {
    const requestUrl = new URL(request.url || '/', redirectUri);

    if (request.method !== 'GET' || requestUrl.pathname !== callbackUrl.pathname) {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Callback OAuth não encontrado.');
      return;
    }

    if (requestUrl.searchParams.get('state') !== state) {
      response.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Estado OAuth inválido. Execute o script novamente.');
      rejectCode(new Error('O parâmetro state recebido não corresponde ao solicitado.'));
      return;
    }

    const oauthError = requestUrl.searchParams.get('error');
    if (oauthError) {
      response.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('A autorização foi recusada. Você pode fechar esta aba.');
      rejectCode(new Error(`O Google recusou a autorização: ${oauthError}`));
      return;
    }

    const code = requestUrl.searchParams.get('code');
    if (!code) {
      response.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('O Google não retornou um código de autorização.');
      rejectCode(new Error('Código de autorização ausente no callback.'));
      return;
    }

    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Autorização concluída. Você pode fechar esta aba.');
    resolveCode(code);
  });

  try {
    await listen(server, port, host);
    console.log(`Aguardando o callback OAuth em ${redirectUri}`);
    console.log('URI que deve estar cadastrada em Google Cloud > Credenciais > URIs de redirecionamento autorizadas:');
    console.log(redirectUri);
    console.log('Se o navegador não concluir a autorização, abra manualmente esta URL:');
    console.log(authorizationUrl);
    await open(authorizationUrl, { wait: false });

    let timeout: ReturnType<typeof setTimeout> | undefined;
    const timeoutError = new Promise<never>((_, reject) => {
      timeout = setTimeout(() => {
        reject(new Error(
          `Tempo de autorização excedido. Se o Google exibiu "redirect_uri_mismatch", cadastre exatamente "${redirectUri}" em Google Cloud > APIs e serviços > Credenciais > cliente OAuth > URIs de redirecionamento autorizadas. Não acrescente barra final. Como alternativa, consulte OAuth 2.0 Playground no README.`
        ));
      }, callbackTimeoutMs);
    });
    const code = await Promise.race([authorizationCode, timeoutError]).finally(() => {
      if (timeout) clearTimeout(timeout);
    });
    const { tokens } = await oauthClient.getToken(code);
    if (!tokens.refresh_token) {
      throw new Error(
        'O Google não retornou refresh token. Remova o acesso existente da conta Google e execute novamente com consentimento.'
      );
    }

    console.log('\n====================================================');
    console.log('Refresh token gerado. Copie-o para GOOGLE_REFRESH_TOKEN:');
    console.log(tokens.refresh_token);
    console.log('====================================================\n');
  } finally {
    await close(server);
  }
}

function listen(server: Server, port: number, host: string): Promise<void> {
  return new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(port, host, () => {
      server.off('error', reject);
      resolve();
    });
  });
}

function close(server: Server): Promise<void> {
  if (!server.listening) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    server.close(error => error ? reject(error) : resolve());
  });
}

main().catch(error => {
  if (isAddressInUseError(error)) {
    const redirectUri = process.env.OAUTH_REDIRECT_URI || 'http://localhost:3001/oauth2callback';
    console.error(
      `Não foi possível iniciar o callback OAuth: a porta do redirect URI (${redirectUri}) já está em uso. ` +
      'Feche o processo que a utiliza ou configure OAUTH_REDIRECT_URI com outra porta livre e cadastre a URI exata no Google Cloud.'
    );
  } else {
    console.error('Não foi possível gerar o refresh token:', error);
  }
  process.exitCode = 1;
});

function isAddressInUseError(error: unknown): error is NodeJS.ErrnoException {
  return typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    error.code === 'EADDRINUSE';
}
