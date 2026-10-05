import * as dotenv from 'dotenv';

dotenv.config();

export const SEED_EVENT_MARKER = {
  key: 'my-agenda-seed',
  value: 'calendar-seed-v1'
} as const;

export const SEED_CALENDAR_MARKER_PREFIX = '[my-agenda-calendar-seed:calendar-seed-v1:';

export function getSeedCalendarMarker(key: string): string {
  return `${SEED_CALENDAR_MARKER_PREFIX}${key}]`;
}

export interface SeedCalendar {
  id: string;
  summary?: string;
  description?: string;
  timeZone?: string;
  backgroundColor?: string;
}

export interface SeedEvent {
  id?: string;
  summary?: string;
  colorId?: string;
  extendedProperties?: { private?: Record<string, string> | null } | null;
}

interface ApiError {
  error?: string;
}

export class SeedBase {
  protected readonly apiUrl = (process.env.API_URL_SEED || '').replace(/\/+$/, '');

  constructor() {
    if (!this.apiUrl) {
      throw new Error('Defina API_URL_SEED no arquivo .env.');
    }
  }

  protected async request<T>(
    action: string,
    options: {
      method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
      calendarId?: string;
      query?: Record<string, string>;
      body?: unknown;
    } = {}
  ): Promise<T> {
    const url = new URL(`${this.apiUrl}/calendar`);
    url.searchParams.set('action', action);
    for (const [key, value] of Object.entries(options.query ?? {})) {
      url.searchParams.set(key, value);
    }

    const headers: Record<string, string> = {};
    const method = options.method ?? 'GET';
    if (options.calendarId) {
      headers['x-google-calendar-id'] = options.calendarId;
    }
    if (options.body !== undefined) {
      headers['Content-Type'] = 'application/json';
    }
    const response = await fetch(url, {
      method,
      headers,
      ...(options.body === undefined ? {} : { body: JSON.stringify(options.body) })
    });

    if (!response.ok) {
      const responseText = await response.text();
      let message = responseText;
      try {
        const error = JSON.parse(responseText) as ApiError;
        message = error.error || responseText;
      } catch {
        message = responseText;
      }
      throw new Error(`${response.status} ${response.statusText}: ${message}`);
    }

    if (response.status === 204) return undefined as T;
    return await response.json() as T;
  }
}
