export interface CalendarEvent {
  kind?: string;
  etag?: string;
  id: string;
  status?: string;
  htmlLink?: string;
  created?: string;
  updated?: string;
  summary: string;
  description?: string;
  location?: string;
  creator?: {
    email: string;
    self?: boolean;
  };
  organizer?: {
    email: string;
    self?: boolean;
  };
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  recurringEventId?: string;
  originalStartTime?: {
    dateTime?: string;
    date?: string;
  };
  transparency?: string;
  visibility?: string;
  iCalUID?: string;
  sequence?: number;
  reminders?: {
    useDefault: boolean;
    overrides?: Array<{
      method: string;
      minutes: number;
    }>;
  };
  eventType?: string;
  birthdayProperties?: {
    type?: string;
    [key: string]: unknown;
  };
}

export interface CreateCalendarEvent {
  summary: string;
  description?: string;
  startDateTime: string;
  endDateTime: string;
  location?: string;
}
