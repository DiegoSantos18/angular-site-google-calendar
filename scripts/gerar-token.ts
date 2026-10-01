import { google } from 'googleapis';
import * as http from 'http';
import * as url from 'url';
import open from 'open';
import destroyer from 'server-destroy';
import * as dotenv from 'dotenv';

dotenv.config();

async function main() {
  const config = {
    redirectUri: 'http://localhost:3000',
    scope: 'https://www.googleapis.com/auth/calendar',
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  };

  if (!config.clientId || !config.clientSecret) {
    console.error('Erro: GOOGLE_CLIENT_ID ou GOOGLE_CLIENT_SECRET não definidos no arquivo .env');
    process.exit(1);
  }

  const oAuth2Client = new google.auth.OAuth2(
    config.clientId,
    config.clientSecret,
    config.redirectUri
  );

  const authorizeUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: [config.scope],
  });

  const server = http.createServer(async (req, res) => {
    try {
      if (req.url && req.url.indexOf('/?code=') > -1) {
        const qs = new url.URL(req.url, config.redirectUri).searchParams;
        const code = qs.get('code');
        res.end('Autenticacao concluida com sucesso! Pode fechar esta aba.');
        server.destroy();

        if (code) {
          const { tokens } = await oAuth2Client.getToken(code);
          console.log('\n====================================================');
          console.log('SEU REFRESH TOKEN FOI GERADO COM SUCESSO:');
          console.log(tokens.refresh_token);
          console.log('====================================================\n');
        }
      }
    } catch (e) {
      console.error('Erro durante a autenticacao:', e);
      res.end('Erro durante a autenticacao.');
      server.destroy();
    }
  });

  server.listen(3000, async () => {
    console.log('Abrindo o navegador para autenticação...');
    await open(authorizeUrl, { wait: false });
  });
  destroyer(server);
}

main().catch(console.error);
