import { VercelRequest, VercelResponse } from '@vercel/node';
import { google } from 'googleapis';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
  const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary';

  if (!clientId || !clientSecret || !refreshToken || !calendarId) {
    return res.status(500).json({ error: 'Variáveis de ambiente do Google Calendar não configuradas.' });
  }

  const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret);
  oAuth2Client.setCredentials({ refresh_token: refreshToken });

  const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

  // --- 1. LISTAR EVENTOS (GET) ---
  if (req.method === 'GET') {
    try {
      const response = await calendar.events.list({
        calendarId: calendarId,
        timeMin: new Date().toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
      });

      const events = response.data.items || [];
      return res.status(200).json(events);
    } catch (error) {
      console.error('Erro ao buscar eventos do calendário:', error);
      return res.status(500).json({ error: 'Erro interno ao carregar a agenda.' });
    }
  }

  // --- 2. CRIAR NOVO EVENTO (POST) ---
  if (req.method === 'POST') {
    try {
      const { summary, description, startDateTime, endDateTime, location } = req.body;

      if (!summary || !startDateTime || !endDateTime) {
        return res.status(400).json({ error: 'Campos obrigatórios em falta (summary, startDateTime, endDateTime).' });
      }

      const event = {
        summary,
        description,
        start: { dateTime: startDateTime },
        end: { dateTime: endDateTime },
        location: location
      };

      const response = await calendar.events.insert({
        calendarId: calendarId,
        requestBody: event,
      });

      return res.status(201).json({ message: 'Evento criado com sucesso!', event: response.data });
    } catch (error) {
      console.error('Erro ao criar evento no calendário:', error);
      return res.status(500).json({ error: 'Erro interno ao criar o evento.' });
    }
  }

  // --- 3. MÉTODO NÃO SUPORTADO ---
  return res.status(405).json({ error: 'Método não permitido' });
}
