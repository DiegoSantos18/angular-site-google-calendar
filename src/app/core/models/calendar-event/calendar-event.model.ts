export interface CalendarEventDate {
  dateTime?: string | null;
  date?: string | null;
  timeZone?: string | null;
}

export interface CalendarEvent {
  id?: string | null;
  summary?: string | null;
  description?: string | null;
  location?: string | null;
  start?: CalendarEventDate | null;
  end?: CalendarEventDate | null;
  colorId?: string | null;
  eventColor?: string;
  htmlLink?: string | null;
  status?: string | null;
}

export interface CreateCalendarEvent {
  summary: string;
  description?: string;
  location?: string;
  startDateTime: string;
  endDateTime: string;
  colorId?: string;
}

export interface CalendarEventCreated {
  message: string;
  event: CalendarEvent;
}

export interface CalendarActionResponse {
  message: string;
}

export const googleEventPalette: Record<string, { color: string; label: string }> = {
  '1': { color: '#a4bdfc', label: 'Lavanda' },
  '2': { color: '#7ae7bf', label: 'Sálvia' },
  '3': { color: '#dbadff', label: 'Uva' },
  '4': { color: '#ff887c', label: 'Flamingo' },
  '5': { color: '#fbd75b', label: 'Banana' },
  '6': { color: '#ffb878', label: 'Tangerina' },
  '7': { color: '#46d6db', label: 'Pavão' },
  '8': { color: '#e1e1e1', label: 'Grafite' },
  '9': { color: '#5484ed', label: 'Mirtilo' },
  '10': { color: '#51b749', label: 'Manjericão' },
  '11': { color: '#dc2127', label: 'Tomate' }
};

export function resolveEventColor(
  event: Pick<CalendarEvent, 'colorId' | 'eventColor'>
): string | null {
  if (event.eventColor && /^#[\da-f]{6}$/i.test(event.eventColor)) {
    return event.eventColor;
  }

  return event.colorId ? googleEventPalette[event.colorId]?.color ?? null : null;
}
