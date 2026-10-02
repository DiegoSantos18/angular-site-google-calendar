import { VercelRequest, VercelResponse } from '@vercel/node';
import { calendar_v3, google } from 'googleapis';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
  const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary';
  const action = req.query.action;

  if (!clientId || !clientSecret || !refreshToken || !calendarId) {
    return res.status(500).json({ error: 'Variáveis de ambiente do Google Calendar não configuradas.' });
  }
  else if (!action){
    return res.status(400).json({ error: 'Parâmetro "action" é obrigatório na query string.' });
  }

  const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret);
  oAuth2Client.setCredentials({ refresh_token: refreshToken });

  const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

  if (req.method === 'GET') {
    const skip = req.query.skip ? Number(req.query.skip) : 0;
    const take = req.query.take ? Number(req.query.take) : 50;

    switch (action) {
      case 'get-events':
        return await getEvents(req, res, calendar, calendarId, skip, take);
      default:
        return res.status(400).json({ error: `Ação "${action}" do método GET não reconhecida.` });
    }
  }
  else if (req.method === 'POST') {
    switch (action) {
      case 'add-event':
        return await addEvent(req, res, calendar, calendarId);
      default:
        return res.status(400).json({ error: `Ação "${action}" do método POST não reconhecida.` });
    }
  }
  else if (req.method === 'DELETE') {
    switch (action) {
      case 'delete-event':
        return await deleteEvent(req, res, calendar, calendarId);
      default:
        return res.status(400).json({ error: `Ação "${action}" do método DELETE não reconhecida.` });
    }
  }
  else {
    return res.status(405).json({ error: 'Método não permitido' });
  }
}

async function getEvents(
  req: VercelRequest,
  res: VercelResponse,
  calendar: calendar_v3.Calendar,
  calendarId: string,
  skip: number,
  take: number
) {
  try {
    const response = await calendar.events.list({
      calendarId: calendarId,
      timeMin: new Date().toISOString(),
      maxResults: skip + take,
      singleEvents: true,
      orderBy: 'startTime',
    });

    const allEvents = response.data.items || [];
    const paginatedEvents = allEvents.slice(skip, skip + take);

    return res.status(200).json(paginatedEvents);
  } catch (error) {
    console.error('Erro ao buscar eventos do calendário:', error);
    return res.status(500).json({ error: 'Erro interno ao carregar a agenda.' });
  }
}

async function addEvent(req: VercelRequest, res: VercelResponse, calendar: calendar_v3.Calendar, calendarId: string) {
  try {
    const { summary, description, startDateTime, endDateTime, location } = req.body;

    if (!summary || !startDateTime || !endDateTime) {
      return res.status(400).json({ error: 'Campos obrigatórios em falta.' });
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
    console.error('Erro ao criar evento:', error);
    return res.status(500).json({ error: 'Erro interno ao criar o evento.' });
  }
}

async function deleteEvent(req: VercelRequest, res: VercelResponse, calendar: calendar_v3.Calendar, calendarId: string) {
  try {
    const eventId = req.query.id as string;
    if (!eventId) {
      return res.status(400).json({ error: 'Parâmetro "id" é obrigatório.' });
    }

    await calendar.events.delete({
      calendarId: calendarId,
      eventId: eventId,
    });

    return res.status(200).json({ message: 'Evento deletado com sucesso!' });
  } catch (error) {
    console.error('Erro ao deletar evento:', error);
    return res.status(500).json({ error: 'Erro interno ao deletar o evento.' });
  }
}
