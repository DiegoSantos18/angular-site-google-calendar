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

export const googleEventPalette: Record<string, string> = {
  '1': '#a4bdfc', // Lavanda
  '2': '#7ae7bf', // Sálvia
  '3': '#dbadff', // Uva
  '4': '#ff887c', // Flamingo
  '5': '#fbd75b', // Banana
  '6': '#ffb878', // Tangerina
  '7': '#46d6db', // Pavão
  '8': '#e1e1e1', // Grafite
  '9': '#5484ed', // Mirtilo
  '10': '#51b749', // Manjericão
  '11': '#dc2127'  // Tomate
};

export function resolveEventColor(
  event: Pick<CalendarEvent, 'colorId' | 'eventColor'>
): string | null {
  if (event.eventColor && /^#[\da-f]{6}$/i.test(event.eventColor)) {
    return event.eventColor;
  }

  return event.colorId ? googleEventPalette[event.colorId] ?? null : null;
}
