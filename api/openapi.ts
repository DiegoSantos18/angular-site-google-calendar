import type { VercelRequest, VercelResponse } from '@vercel/node';

const specification = {
  openapi: '3.0.3',
  info: {
    title: 'Google Calendar API',
    version: '1.0.0',
    description: [
      'API para listar, criar e excluir calendários e gerenciar eventos.',
      'Calendários principais não são retornados nem aceitos nas operações de eventos.',
      'Use `GET /api/calendar?action=health` para verificar a disponibilidade e `GET /api/openapi` para esta especificação.',
      'O backend resolve rótulos modernos de cor de evento para `eventColor`; cores legadas são informadas em `colorId`.'
    ].join('\n\n')
  },
  servers: [{ url: '/' }],
  paths: {
    '/api/calendar': {
      get: {
        operationId: 'getCalendarData',
        summary: 'Listar calendários, consultar eventos ou verificar a API',
        description: [
          'Escolha a operação pelo parâmetro `action`.',
          '`get-calendars` retorna somente calendários não principais.',
          '`get-events` exige `x-google-calendar-id` de um calendário retornado por `get-calendars`.',
          '`health` não acessa dados do calendário; informa somente se as credenciais do servidor estão configuradas.',
          'Todas as operações são públicas e não exigem login. CORS não restringe chamadas HTTP diretas.',
          'Os endpoints de escrita e exclusão usam as credenciais privilegiadas do servidor; qualquer pessoa pode criar ou remover calendários e eventos.'
        ].join('\n\n'),
        parameters: [
          {
            name: 'action',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
              enum: ['get-calendars', 'get-events', 'health']
            }
          },
          {
            name: 'x-google-calendar-id',
            in: 'header',
            required: false,
            description: 'Obrigatório para `get-events`; use um ID retornado por `get-calendars`, nunca `primary`.',
            schema: { type: 'string' }
          },
          {
            name: 'skip',
            in: 'query',
            required: false,
            description: 'Offset da página; inteiro de 0 a 2499. A soma skip + take não pode exceder 2500.',
            schema: { type: 'integer', minimum: 0, maximum: 2499, default: 0 }
          },
          {
            name: 'take',
            in: 'query',
            required: false,
            description: 'Quantidade máxima de eventos retornados (a API do Google limita cada consulta a 2500).',
            schema: { type: 'integer', minimum: 1, maximum: 2500, default: 50 }
          }
        ],
        responses: {
          '200': {
            description: 'Lista de calendários, lista de eventos ou estado das credenciais, conforme `action`.',
            content: {
              'application/json': {
                schema: {
                  oneOf: [
                    {
                      $ref: '#/components/schemas/Calendars'
                    },
                    {
                      $ref: '#/components/schemas/Events'
                    },
                    { $ref: '#/components/schemas/HealthStatus' }
                  ]
                }
              }
            }
          },
          '400': { description: 'Ação, calendário ou paginação inválida.', content: { 'application/json': { schema: { $ref: '#/components/schemas/ApiError' } } } },
          '500': { description: 'Credenciais ausentes ou erro interno ao consultar o Google Calendar.', content: { 'application/json': { schema: { $ref: '#/components/schemas/ApiError' } } } },
          '503': { description: 'Health check: credenciais do Google ainda não configuradas.' }
        }
      },
      post: {
        operationId: 'createCalendarOrEvent',
        summary: 'Criar agenda ou evento',
        description: [
          'Use `action=create-calendar` para criar uma agenda, `action=add-calendar` para criar/reutilizar agendas de seed, ou `action=add-event` para criar um evento.',
          'A criação de agenda não exige `x-google-calendar-id`; criação de evento exige um ID não principal.',
          'Esta operação é pública e não exige autenticação. Qualquer pessoa pode criar agendas e eventos usando as credenciais do servidor.'
        ].join('\n\n'),
        parameters: [
          {
            name: 'action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['create-calendar', 'add-calendar', 'add-event'] }
          },
          {
            name: 'x-google-calendar-id',
            in: 'header',
            required: false,
            description: 'Obrigatório para `add-event`; não se aplica à criação de agendas.',
            schema: { type: 'string' }
          }
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                oneOf: [
                  { $ref: '#/components/schemas/UserCalendarCreate' },
                  { $ref: '#/components/schemas/CalendarCreate' },
                  {
                    type: 'object',
                    required: ['summary', 'startDateTime', 'endDateTime'],
                    properties: {
                      summary: { type: 'string', example: 'Reunião de planejamento' },
                      description: { type: 'string' },
                      startDateTime: { type: 'string', format: 'date-time' },
                      endDateTime: { type: 'string', format: 'date-time' },
                      location: { type: 'string' },
                      colorId: { type: 'string', enum: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'], description: 'ID da cor legada do evento na paleta Google.' },
                      extendedProperties: {
                        type: 'object',
                        description: 'Campos privados opcionais. Os scripts de seed usam a chave interna my-agenda-seed para permitir uma reversão seletiva.',
                        properties: {
                          private: {
                            type: 'object',
                            additionalProperties: { type: 'string' }
                          }
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        },
        responses: {
          '201': {
            description: 'Evento ou calendário criado.',
            content: {
              'application/json': {
                schema: {
                  oneOf: [
                    { $ref: '#/components/schemas/MutationResult' },
                    { $ref: '#/components/schemas/Calendar' }
                  ]
                }
              }
            }
          },
          '200': {
            description: 'Calendário de seed existente e reutilizado.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Calendar' } } }
          },
          '400': { description: 'Campos obrigatórios ausentes ou calendário inválido.', content: { 'application/json': { schema: { $ref: '#/components/schemas/ApiError' } } } },
          '403': { description: 'O Google Calendar recusou a operação por falta de permissão da conta de serviço.', content: { 'application/json': { schema: { $ref: '#/components/schemas/ApiError' } } } },
          '409': { description: 'Há calendários de seed duplicados para a mesma chave.', content: { 'application/json': { schema: { $ref: '#/components/schemas/ApiError' } } } },
          '502': { description: 'O Google Calendar não retornou o calendário criado.', content: { 'application/json': { schema: { $ref: '#/components/schemas/ApiError' } } } },
          '500': { description: 'Falha interna ao criar o evento.', content: { 'application/json': { schema: { $ref: '#/components/schemas/ApiError' } } } }
        }
      },
      delete: {
        operationId: 'deleteCalendarOrEvent',
        summary: 'Excluir agenda ou evento',
        description: 'Esta operação é pública e não exige autenticação. Use `delete-calendar` para excluir permanentemente uma agenda secundária e todos os eventos nela contidos. Use `delete-event` para excluir apenas um evento. Ambas as operações exigem `x-google-calendar-id`; o calendário principal nunca é aceito. Qualquer pessoa pode excluir os dados que a API consegue acessar.',
        parameters: [
          {
            name: 'action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['delete-calendar', 'delete-event'] }
          },
          {
            name: 'id',
            in: 'query',
            required: false,
            description: 'Obrigatório somente para `delete-event`; não se aplica a `delete-calendar`.',
            schema: { type: 'string' }
          },
          {
            name: 'x-google-calendar-id',
            in: 'header',
            required: true,
            description: 'ID de um calendário não principal. Para `delete-calendar`, é a agenda que será excluída.',
            schema: { type: 'string' }
          }
        ],
        responses: {
          '200': {
            description: 'Agenda ou evento excluído.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/MutationResult' } } }
          },
          '400': { description: 'ID do evento ou calendário inválido.', content: { 'application/json': { schema: { $ref: '#/components/schemas/ApiError' } } } },
          '403': { description: 'O Google Calendar recusou a operação por falta de permissão da conta de serviço.', content: { 'application/json': { schema: { $ref: '#/components/schemas/ApiError' } } } },
          '404': { description: 'Agenda ou evento não encontrado.', content: { 'application/json': { schema: { $ref: '#/components/schemas/ApiError' } } } },
          '500': { description: 'Falha interna ao excluir agenda ou evento.', content: { 'application/json': { schema: { $ref: '#/components/schemas/ApiError' } } } }
        }
      },
      patch: {
        operationId: 'updateSeedEventColor',
        summary: 'Atualizar cor de evento seed',
        description: 'Atualização pública usada pelo seed para aplicar as cores definidas em events-seed.json aos eventos de demonstração existentes. A API permite alterar somente o colorId de um evento com marcador seed, dentro de um calendário com marcador seed. Nunca altera eventos comuns.',
        parameters: [
          {
            name: 'action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['update-seed-event'] }
          },
          {
            name: 'id',
            in: 'query',
            required: true,
            description: 'ID do evento seed a atualizar.',
            schema: { type: 'string' }
          },
          {
            name: 'x-google-calendar-id',
            in: 'header',
            required: true,
            description: 'ID do calendário de demonstração que contém o evento.',
            schema: { type: 'string' }
          }
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['colorId'],
                properties: {
                  colorId: {
                    type: 'string',
                    enum: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
                    description: 'ID da cor legada do evento na paleta Google.'
                  }
                }
              }
            }
          }
        },
        responses: {
          '200': {
            description: 'Cor do evento seed atualizada.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: ['message', 'event'],
                  properties: {
                    message: { type: 'string' },
                    event: { $ref: '#/components/schemas/Event' }
                  }
                }
              }
            }
          },
          '400': { description: 'ID ou cor inválida.', content: { 'application/json': { schema: { $ref: '#/components/schemas/ApiError' } } } },
          '403': { description: 'O evento ou calendário não está marcado como seed.', content: { 'application/json': { schema: { $ref: '#/components/schemas/ApiError' } } } },
          '404': { description: 'Evento ou calendário não encontrado.', content: { 'application/json': { schema: { $ref: '#/components/schemas/ApiError' } } } },
          '500': { description: 'Falha ao atualizar a cor do evento seed.', content: { 'application/json': { schema: { $ref: '#/components/schemas/ApiError' } } } }
        }
      }
    }
  },
  components: {
    schemas: {
      CalendarCreate: {
        type: 'object',
        required: ['key', 'summary', 'description', 'timeZone', 'backgroundColor'],
        properties: {
          key: { type: 'string', enum: ['technology', 'community'] },
          summary: { type: 'string', example: 'Tecnologia' },
          description: {
            type: 'string',
            description: 'Deve conter o marcador [my-agenda-calendar-seed:calendar-seed-v1:<key>] para permitir que o seed reutilize a agenda.'
          },
          timeZone: { type: 'string', example: 'America/Sao_Paulo' },
          backgroundColor: { type: 'string', pattern: '^#[0-9a-fA-F]{6}$', example: '#4986e7' }
        }
      },
      UserCalendarCreate: {
        type: 'object',
        required: ['summary'],
        properties: {
          summary: { type: 'string', minLength: 1, maxLength: 100, example: 'Minha agenda' },
          description: { type: 'string', maxLength: 1000 },
          timeZone: { type: 'string', example: 'America/Sao_Paulo', description: 'Opcional; padrão `America/Sao_Paulo`.' },
          backgroundColor: {
            type: 'string',
            pattern: '^#[0-9a-fA-F]{6}$',
            example: '#4986e7',
            description: 'Opcional; cor hexadecimal aplicada à agenda. A interface oferece a paleta Google de agendas.'
          }
        }
      },
      Calendar: {
        type: 'object',
        required: ['id'],
        properties: {
          id: { type: 'string', example: 'calendar-id@group.calendar.google.com' },
          summary: { type: 'string', example: 'Comunidade' },
          description: { type: 'string' },
          timeZone: { type: 'string', example: 'America/Sao_Paulo' },
          backgroundColor: { type: 'string', pattern: '^#[0-9a-fA-F]{6}$', example: '#f691b2' },
          foregroundColor: { type: 'string', pattern: '^#[0-9a-fA-F]{6}$' }
        }
      },
      Calendars: { type: 'array', items: { $ref: '#/components/schemas/Calendar' } },
      EventDate: {
        type: 'object',
        properties: {
          dateTime: { type: 'string', format: 'date-time' },
          date: { type: 'string', format: 'date' },
          timeZone: { type: 'string' }
        }
      },
      Event: {
        type: 'object',
        description: 'Eventos incluem campos do Google Calendar e `eventColor` é incluído quando um rótulo moderno tem cor hexadecimal válida.',
        properties: {
          id: { type: 'string' },
          summary: { type: 'string' },
          description: { type: 'string' },
          location: { type: 'string' },
          htmlLink: { type: 'string', format: 'uri' },
          extendedProperties: { type: 'object', description: 'Pode conter propriedades privadas usadas por integrações ou pelo seed.' },
          colorId: { type: 'string', description: 'ID de cor legado do Google Calendar (1–11).' },
          eventLabelId: { type: 'string', description: 'ID do rótulo moderno de cor definido no calendário.' },
          eventColor: { type: 'string', pattern: '^#[0-9a-fA-F]{6}$', description: 'Cor de fundo do rótulo moderno, resolvida pelo backend.' },
          start: { $ref: '#/components/schemas/EventDate' },
          end: { $ref: '#/components/schemas/EventDate' }
        }
      },
      Events: { type: 'array', items: { $ref: '#/components/schemas/Event' } },
      HealthStatus: {
        type: 'object',
        required: ['service', 'status', 'credentialsConfigured'],
        properties: {
          service: { type: 'string', example: 'Google Calendar API' },
          status: { type: 'string', enum: ['ok', 'configuration_required'] },
          credentialsConfigured: { type: 'boolean' }
        }
      },
      MutationResult: {
        type: 'object',
        properties: {
          message: { type: 'string' },
          event: { $ref: '#/components/schemas/Event' }
        }
      },
      ApiError: {
        type: 'object',
        properties: { error: { type: 'string' } },
        required: ['error']
      }
    }
  }
};

export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).json(specification);
}
