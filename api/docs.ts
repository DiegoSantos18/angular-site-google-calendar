import type { VercelRequest, VercelResponse } from '@vercel/node';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { getAbsoluteFSPath } from 'swagger-ui-dist';

const assetContentTypes: Record<string, string> = {
  'swagger-ui.css': 'text/css; charset=utf-8',
  'swagger-ui-bundle.js': 'text/javascript; charset=utf-8',
  'swagger-ui-standalone-preset.js': 'text/javascript; charset=utf-8',
  'favicon.png': 'image/png'
};

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método não permitido.' });
  }

  const asset = req.query.asset;
  if (typeof asset === 'string') {
    const contentType = assetContentTypes[asset];
    if (!contentType) {
      return res.status(404).json({ error: 'Asset da documentação não encontrado.' });
    }

    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'public, max-age=86400');
    if (asset === 'favicon.png') {
      return res.status(200).send(
        readFileSync(join(process.cwd(), 'public', 'favicon.png'))
      );
    }

    return res.status(200).send(
      readFileSync(join(getAbsoluteFSPath(), asset))
    );
  }

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).send(
    readFileSync(join(process.cwd(), 'public', 'api-docs.html'), 'utf8')
  );
}
