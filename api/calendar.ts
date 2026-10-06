import { VercelRequest, VercelResponse } from '@vercel/node';
import { calendar_v3, google } from 'googleapis';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const allowedOrigin = process.env.ALLOWED_ORIGIN || '*';

  res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-google-calendar-id');

  if (req.method === 'OPTIONS') { return res.status(200).end(); }

  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
  const calendarHeader = req.headers['x-google-calendar-id'];
  const calendarId = typeof calendarHeader === 'string' ? calendarHeader : undefined;
  const action = req.query.action;

  if (req.method === 'GET' && action === 'docs') {
    res.setHeader('Location', '/');
    return res.status(302).end();
  }
  if (req.method === 'GET' && action === 'health') {
    return sendHealthStatus(res);
  }
  if (!clientId || !clientSecret || !refreshToken) {
    return res.status(500).json({ error: 'Variáveis de ambiente do Google Calendar não configuradas.' });
  }
  if (!action) {
    return res.status(400).json({ error: 'Parâmetro "action" é obrigatório na query string.' });
  }
  if (
    action !== 'get-calendars' &&
    action !== 'create-calendar' &&
    (!calendarId || calendarId === 'primary')
  ) {
    return res.status(400).json({ error: 'Selecione um calendário disponível diferente do principal.' });
  }

  const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret);
  oAuth2Client.setCredentials({ refresh_token: refreshToken });

  const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

  switch (req.method) {
    case 'GET':
      return await getMethods(req, res, action, calendar, calendarId);
    case 'POST':
      return await postMethods(req, res, action, calendar, calendarId);
    case 'PATCH':
      return await patchMethods(req, res, action, calendar, calendarId);
    case 'DELETE':
      return await deleteMethods(req, res, action, calendar, calendarId);
    default:
      return res.status(405).json({ error: 'Método não permitido' });
  }
}

function sendHealthStatus(res: VercelResponse) {
  const credentialsConfigured = Boolean(
    process.env.GOOGLE_CLIENT_ID &&
    process.env.GOOGLE_CLIENT_SECRET &&
    process.env.GOOGLE_REFRESH_TOKEN
  );

  return res.status(credentialsConfigured ? 200 : 503).json({
    service: 'Google Calendar API',
    status: credentialsConfigured ? 'ok' : 'configuration_required',
    credentialsConfigured
  });
}

// Métodos HTTP
async function getMethods(
  req: VercelRequest,
  res: VercelResponse,
  action: string | string[],
  calendar: calendar_v3.Calendar,
  calendarId: string | undefined
) {
  const skip = parseIntegerQuery(req.query.skip, 0, 0, 2499);
  const take = parseIntegerQuery(req.query.take, 50, 1, 2500);

  if (
    action === 'get-events' &&
    (skip === null || take === null || skip + take > 2500)
  ) {
    return res.status(400).json({
      error: 'Os parâmetros skip e take devem ser inteiros válidos e sua soma não pode exceder 2500.'
    });
  }

  switch (action) {
    case 'get-calendars':
      return await getCalendars(res, calendar);
    case 'get-events':
      if (!calendarId || calendarId === 'primary') {
        return res.status(400).json({ error: 'Selecione um calendário disponível diferente do principal.' });
      }
      if (skip === null || take === null) {
        return res.status(400).json({ error: 'Parâmetros de paginação inválidos.' });
      }
      return await getEvents(res, calendar, calendarId, skip, take);
    default:
      return res.status(400).json({ error: `Ação "${action}" do método GET não reconhecida.` });
  }

  function parseIntegerQuery(
    value: string | string[] | undefined,
    defaultValue: number,
    minimum: number,
    maximum: number
  ): number | null {
    if (value === undefined) return defaultValue;
    if (typeof value !== 'string' || !/^\d+$/.test(value)) return null;

    const parsed = Number(value);
    return Number.isSafeInteger(parsed) && parsed >= minimum && parsed <= maximum
      ? parsed
      : null;
  }
}

async function postMethods(
  req: VercelRequest,
  res: VercelResponse,
  action: string | string[],
  calendar: calendar_v3.Calendar,
  calendarId: string | undefined
) {
  switch (action) {
    case 'create-calendar':
      return await createCalendar(req, res, calendar);
    case 'add-event':
      if (!calendarId || calendarId === 'primary') {
        return res.status(400).json({ error: 'Selecione um calendário disponível diferente do principal.' });
      }
      return await addEvent(req, res, calendar, calendarId);
    default:
      return res.status(400).json({ error: `Ação "${action}" do método POST não reconhecida.` });
  }
}

async function patchMethods(
  req: VercelRequest,
  res: VercelResponse,
  action: string | string[],
  calendar: calendar_v3.Calendar,
  calendarId: string | undefined
) {
  if (action !== 'update-seed-event') {
    return res.status(400).json({ error: `Ação "${action}" do método PATCH não reconhecida.` });
  }
  if (!calendarId || calendarId === 'primary') {
    return res.status(400).json({ error: 'Selecione um calendário disponível diferente do principal.' });
  }
  return await updateSeedEvent(req, res, calendar, calendarId);
}

async function deleteMethods(
  req: VercelRequest,
  res: VercelResponse,
  action: string | string[],
  calendar: calendar_v3.Calendar,
  calendarId: string | undefined
) {
  switch (action) {
    case 'delete-calendar':
      if (!calendarId || calendarId === 'primary') {
        return res.status(400).json({ error: 'Selecione um calendário disponível diferente do principal.' });
      }
      return await deleteCalendar(res, calendar, calendarId);
    case 'delete-event':
      if (!calendarId || calendarId === 'primary') {
        return res.status(400).json({ error: 'Selecione um calendário disponível diferente do principal.' });
      }
      return await deleteEvent(req, res, calendar, calendarId);
    default:
      return res.status(400).json({ error: `Ação "${action}" do método DELETE não reconhecida.` });
  }
}
// Fim Métodos HTTP

// Google Calendar - Calendars
async function deleteCalendar(
  res: VercelResponse,
  calendar: calendar_v3.Calendar,
  calendarId: string
) {
  try {
    await calendar.calendars.delete({ calendarId });
    return res.status(200).json({ message: 'Agenda e todos os seus eventos foram excluídos.' });
  } catch (error) {
    console.error('Erro ao excluir agenda:', error);
    const status = typeof error === 'object' && error !== null && 'code' in error
      ? error.code
      : undefined;
    if (status === 403) {
      return res.status(403).json({ error: 'A conta Google não tem permissão para excluir esta agenda.' });
    }
    if (status === 404) {
      return res.status(404).json({ error: 'A agenda selecionada não foi encontrada.' });
    }
    return res.status(500).json({ error: 'Erro interno ao excluir a agenda.' });
  }
}

async function createCalendar(
  req: VercelRequest,
  res: VercelResponse,
  calendar: calendar_v3.Calendar
) {
  const { summary, description, timeZone, backgroundColor } = req.body ?? {};
  if (
    typeof summary !== 'string' ||
    !summary.trim() ||
    summary.trim().length > 100 ||
    (description !== undefined && typeof description !== 'string') ||
    (typeof description === 'string' && description.length > 1000) ||
    (timeZone !== undefined && typeof timeZone !== 'string') ||
    (backgroundColor !== undefined &&
      (typeof backgroundColor !== 'string' || !/^#[\da-f]{6}$/i.test(backgroundColor)))
  ) {
    return res.status(400).json({
      error: 'Informe um nome de até 100 caracteres e uma descrição de até 1000 caracteres.'
    });
  }

  const calendarTimeZone = typeof timeZone === 'string' && timeZone.trim()
    ? timeZone.trim()
    : 'America/Sao_Paulo';

  try {
    new Intl.DateTimeFormat('pt-BR', { timeZone: calendarTimeZone });
  } catch {
    return res.status(400).json({ error: 'Informe um fuso horário válido.' });
  }

  try {
    const response = await calendar.calendars.insert({
      requestBody: {
        summary: summary.trim(),
        ...(typeof description === 'string' && description.trim()
          ? { description: description.trim() }
          : {}),
        timeZone: calendarTimeZone
      }
    });

    if (!response.data.id) {
      return res.status(502).json({ error: 'O Google Calendar não retornou o ID da agenda criada.' });
    }

    // Adicionar permissão pública de leitura (ACL) para o iframe
    await calendar.acl.insert({
      calendarId: response.data.id,
      requestBody: {
        role: 'reader',
        scope: {
          type: 'default'
        }
      }
    });

    if (typeof backgroundColor === 'string') {
      const calendarListEntry = await calendar.calendarList.patch({
        calendarId: response.data.id,
        colorRgbFormat: true,
        requestBody: { backgroundColor }
      });
      return res.status(201).json({
        ...response.data,
        backgroundColor: calendarListEntry.data.backgroundColor ?? backgroundColor,
        foregroundColor: calendarListEntry.data.foregroundColor
      });
    }

    return res.status(201).json(response.data);
  } catch (error) {
    console.error('Erro ao criar calendário:', error);
    return res.status(500).json({ error: 'Erro interno ao criar o calendário.' });
  }
}

async function getCalendars(
  res: VercelResponse,
  calendar: calendar_v3.Calendar
) {
  try {
    const response = await calendar.calendarList.list();
    const items = response.data.items || [];

    const filteredCalendars = items
      .filter(cal => !cal.primary && cal.id !== 'primary')
      .map(cal => ({
        id: cal.id,
        summary: cal.summary,
        description: cal.description,
        timeZone: cal.timeZone,
        backgroundColor: cal.backgroundColor,
        foregroundColor: cal.foregroundColor
    }));

    return res.status(200).json(filteredCalendars);
  } catch (error) {
    console.error('Erro ao listar calendários:', error);
    return res.status(500).json({ error: 'Erro interno ao listar calendários.' });
  }
}
// Fim Google Calendar - Calendars

// Google Calendar - Events
async function getEvents(
  res: VercelResponse,
  calendar: calendar_v3.Calendar,
  calendarId: string,
  skip: number,
  take: number
) {
  try {
    const [response, calendarDetails] = await Promise.all([
      calendar.events.list({
        calendarId,
        timeMin: new Date().toISOString(),
        maxResults: skip + take,
        singleEvents: true,
        orderBy: 'startTime',
      }),
      calendar.calendars.get({ calendarId })
    ]);

    const eventLabels = new Map(
      (calendarDetails.data.labelProperties?.eventLabels ?? [])
        .filter(label =>
          label.id &&
          label.backgroundColor &&
          /^#[\da-f]{6}$/i.test(label.backgroundColor)
        )
        .map(label => [label.id!, label.backgroundColor!])
    );
    const allEvents = (response.data.items || []).map(event => {
      const eventColor = event.eventLabelId ? eventLabels.get(event.eventLabelId) : undefined;
      return eventColor ? { ...event, eventColor } : event;
    });
    const paginatedEvents = allEvents.slice(skip, skip + take);

    return res.status(200).json(paginatedEvents);
  } catch (error) {
    console.error('Erro ao buscar eventos do calendário:', error);
    return res.status(500).json({ error: 'Erro interno ao carregar a agenda.' });
  }
}
async function addEvent(
  req: VercelRequest,
  res: VercelResponse,
  calendar: calendar_v3.Calendar,
  calendarId: string
) {
  try {
    const {
      summary,
      description,
      startDateTime,
      endDateTime,
      location,
      colorId,
      extendedProperties
    } = req.body;

    if (!summary || !startDateTime || !endDateTime) {
      return res.status(400).json({ error: 'Campos obrigatórios em falta.' });
    }
    if (colorId !== undefined && (typeof colorId !== 'string' || !/^(?:[1-9]|1[01])$/.test(colorId))) {
      return res.status(400).json({ error: 'O colorId deve ser um ID válido da paleta Google, de 1 a 11.' });
    }

    const event = {
      summary,
      description,
      start: { dateTime: startDateTime },
      end: { dateTime: endDateTime },
      location,
      ...(colorId === undefined ? {} : { colorId }),
      ...(extendedProperties?.private?.['my-agenda-seed'] === 'calendar-seed-v1'
        ? {
            extendedProperties: {
              private: { 'my-agenda-seed': 'calendar-seed-v1' }
            }
          }
        : {})
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

async function updateSeedEvent(
  req: VercelRequest,
  res: VercelResponse,
  calendar: calendar_v3.Calendar,
  calendarId: string
) {
  const eventId = req.query.id;
  const colorId = req.body?.colorId;
  if (
    typeof eventId !== 'string' ||
    !eventId ||
    typeof colorId !== 'string' ||
    !/^(?:[1-9]|1[01])$/.test(colorId)
  ) {
    return res.status(400).json({ error: 'Informe um ID de evento e um colorId válido de 1 a 11.' });
  }

  try {
    const [calendarEntry, existingEvent] = await Promise.all([
      calendar.calendarList.get({ calendarId }),
      calendar.events.get({ calendarId, eventId })
    ]);
    if (!/\[my-agenda-calendar-seed:calendar-seed-v1:(technology|community)\]/.test(calendarEntry.data.description ?? '') ||
      existingEvent.data.extendedProperties?.private?.['my-agenda-seed'] !== 'calendar-seed-v1') {
      return res.status(403).json({ error: 'A atualização de cor é permitida somente para eventos seed em calendários seed.' });
    }

    const response = await calendar.events.patch({
      calendarId,
      eventId,
      requestBody: { colorId }
    });
    return res.status(200).json({ message: 'Cor do evento seed atualizada.', event: response.data });
  } catch (error) {
    console.error('Erro ao atualizar a cor do evento seed:', error);
    const status = typeof error === 'object' && error !== null && 'code' in error
      ? error.code
      : undefined;
    if (status === 403) {
      return res.status(403).json({ error: 'A conta Google não tem permissão para atualizar este evento seed.' });
    }
    if (status === 404) {
      return res.status(404).json({ error: 'O evento ou calendário seed não foi encontrado.' });
    }
    return res.status(500).json({ error: 'Erro interno ao atualizar a cor do evento seed.' });
  }
}

async function deleteEvent(
  req: VercelRequest,
  res: VercelResponse,
  calendar: calendar_v3.Calendar,
  calendarId: string
) {
  try {
    const eventId = req.query.id;
    if (typeof eventId !== 'string' || !eventId) {
      return res.status(400).json({ error: 'Parâmetro "id" é obrigatório.' });
    }

    await calendar.events.delete({
      calendarId: calendarId,
      eventId: eventId,
    });

    return res.status(200).json({ message: 'Evento deletado com sucesso!' });
  } catch (error) {
    console.error('Erro ao deletar evento:', error);
    if (typeof error === 'object' && error !== null && 'code' in error && error.code === 404) {
      return res.status(404).json({ error: 'O evento selecionado não foi encontrado.' });
    }
    return res.status(500).json({ error: 'Erro interno ao deletar o evento.' });
  }
}
// Fim Google Calendar - Events
