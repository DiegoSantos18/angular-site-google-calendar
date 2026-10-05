import * as dotenv from 'dotenv';
import { createServer, get } from 'node:http';
import type { IncomingMessage, ServerResponse } from 'node:http';
import { URL } from 'node:url';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import calendarHandler from '../api/calendar';
import docsHandler from '../api/docs';
import openApiHandler from '../api/openapi';

dotenv.config();

const port = Number(process.env.API_PORT || 3000);
const maxBodySize = 1024 * 1024;
type LocalApiHandler = (
  request: VercelRequest,
  response: VercelResponse
) => VercelResponse | void | Promise<VercelResponse | void>;

const server = createServer((request, response) => {
  void handleRequest(request, response).catch(error => {
    console.error('Erro no servidor local da API:', error);
    if (!response.headersSent) {
      response.statusCode = 500;
      response.setHeader('Content-Type', 'application/json; charset=utf-8');
    }
    response.end(JSON.stringify({ error: 'Erro interno no servidor local da API.' }));
  });
});

void startServer();

async function startServer(): Promise<void> {
  if (await isCalendarApiRunning()) {
    console.log(`A API local já está ativa em http://localhost:${port}; usando a instância existente.`);
    console.log(`Documentação: http://localhost:${port}/`);
    return;
  }

  try {
    await new Promise<void>((resolve, reject) => {
      const handleError = (error: NodeJS.ErrnoException) => reject(error);
      server.once('error', handleError);
      server.listen(port, '127.0.0.1', () => {
        server.off('error', handleError);
        console.log(`API local disponível em http://localhost:${port}`);
        console.log(`Documentação: http://localhost:${port}/`);
        resolve();
      });
    });
  } catch (error) {
    if (isAddressInUseError(error)) {
      console.error(
        `A porta ${port} já está em uso por outro serviço. Encerre esse serviço ou libere a porta antes de iniciar a API.`
      );
      process.exitCode = 1;
      return;
    }

    console.error('Não foi possível iniciar a API local:', error);
    process.exitCode = 1;
  }
}

function isCalendarApiRunning(): Promise<boolean> {
  return new Promise(resolve => {
    const request = get(
      `http://127.0.0.1:${port}/api/calendar?action=health`,
      response => {
        const chunks: Buffer[] = [];
        let responseSize = 0;

        response.on('data', (chunk: Buffer | string) => {
          const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
          responseSize += buffer.length;
          if (responseSize > 4096) {
            request.destroy();
            resolve(false);
            return;
          }
          chunks.push(buffer);
        });
        response.on('end', () => {
          try {
            const health = JSON.parse(Buffer.concat(chunks).toString('utf8')) as { service?: unknown };
            resolve(health.service === 'Google Calendar API');
          } catch {
            resolve(false);
          }
        });
        response.on('error', () => resolve(false));
      }
    );

    request.setTimeout(1500, () => request.destroy());
    request.on('error', () => resolve(false));
  });
}

function isAddressInUseError(error: unknown): error is NodeJS.ErrnoException {
  return typeof error === 'object' && error !== null && 'code' in error && error.code === 'EADDRINUSE';
}

async function handleRequest(
  request: IncomingMessage,
  response: ServerResponse
): Promise<void> {
  const requestUrl = new URL(request.url || '/', `http://${request.headers.host || 'localhost'}`);
  let handler: LocalApiHandler = calendarHandler;
  if (
    requestUrl.pathname === '/' &&
    request.method === 'GET' &&
    !requestUrl.searchParams.has('action')
  ) {
    handler = docsHandler;
  } else if (requestUrl.pathname === '/api/docs') {
    handler = docsHandler;
  } else if (requestUrl.pathname.startsWith('/api/docs-assets/')) {
    handler = docsHandler;
    requestUrl.searchParams.set(
      'asset',
      requestUrl.pathname.slice('/api/docs-assets/'.length)
    );
  } else if (requestUrl.pathname === '/api/openapi') {
    handler = openApiHandler;
  } else if (requestUrl.pathname === '/api' || requestUrl.pathname.startsWith('/api/')) {
    requestUrl.pathname = '/api/calendar';
  } else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    response.end(JSON.stringify({ error: 'Rota não encontrada.' }));
    return;
  }

  let body: unknown;
  if (request.method === 'POST' || request.method === 'PATCH') {
    try {
      body = await readJsonBody(request);
    } catch (error) {
      response.statusCode = 400;
      response.setHeader('Content-Type', 'application/json; charset=utf-8');
      response.end(JSON.stringify({
        error: error instanceof Error ? error.message : 'Corpo JSON inválido.'
      }));
      return;
    }
  }

  const query: Record<string, string | string[]> = {};
  for (const key of new Set(requestUrl.searchParams.keys())) {
    const values = requestUrl.searchParams.getAll(key);
    query[key] = values.length === 1 ? values[0] : values;
  }

  const vercelRequest = Object.assign(request, {
    url: `${requestUrl.pathname}${requestUrl.search}`,
    query,
    body
  }) as VercelRequest;

  await handler(vercelRequest, createVercelResponse(response));
}

async function readJsonBody(request: IncomingMessage): Promise<unknown> {
  const chunks: Buffer[] = [];
  let bodySize = 0;

  for await (const chunk of request) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    bodySize += buffer.length;
    if (bodySize > maxBodySize) {
      throw new Error('O corpo da requisição excede o limite de 1 MB.');
    }
    chunks.push(buffer);
  }

  if (bodySize === 0) {
    return undefined;
  }

  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    throw new Error('O corpo da requisição deve ser um JSON válido.');
  }
}

function createVercelResponse(response: ServerResponse): VercelResponse {
  const responseAdapter = Object.assign(response, {
    status(statusCode: number) {
      response.statusCode = statusCode;
      return responseAdapter;
    },
    json(payload: unknown) {
      response.setHeader('Content-Type', 'application/json; charset=utf-8');
      response.end(JSON.stringify(payload));
      return responseAdapter;
    },
    send(payload: string | Buffer) {
      response.end(payload);
      return responseAdapter;
    }
  });

  return responseAdapter as VercelResponse;
}
