export interface Calendar {
  id?: string | null;
  summary?: string | null;
  description?: string | null;
  primary?: boolean | null;
  selected?: boolean | null;
  timeZone?: string | null;
  backgroundColor?: string | null;
  foregroundColor?: string | null;
}

export interface CreateCalendar {
  summary: string;
  description?: string;
  timeZone?: string;
  backgroundColor?: string;
}

export const googleCalendarPalette: Record<string, string> = {
  '#ac725e': '#ac725e', // Brown (Castanho)
  '#d06b64': '#d06b64', // Redwood / Light Red (Vermelho Claro)
  '#f83a22': '#f83a22', // Dark Orange / Red (Vermelho Escuro)
  '#fa573c': '#fa573c', // Orange (Laranja)
  '#ff7537': '#ff7537', // Light Orange (Laranja Claro)
  '#ffad46': '#ffad46', // Yellow-Orange / Tangerina (Amarelo-Laranja)
  '#42d692': '#42d692', // Turquoise / Light Green (Turquesa / Verde Claro)
  '#16a765': '#16a765', // Green / Peacock (Verde)
  '#7bd148': '#7bd148', // Light Green (Verde Limão)
  '#b3dc6c': '#b3dc6c', // Lime / Yellow-Green (Verde Amarelado)
  '#fbe983': '#fbe983', // Yellow (Amarelo)
  '#fad165': '#fad165', // Light Yellow (Amarelo Claro)
  '#92e1c0': '#92e1c0', // Mint / Pale Turquoise (Verde Água Claro)
  '#9fe1e7': '#9fe1e7', // Cyan / Pale Blue (Azul Ciano Claro)
  '#9fc6e7': '#9fc6e7', // Light Blue (Azul Claro)
  '#4986e7': '#4986e7', // Blue / Cobalt (Azul)
  '#9a9cff': '#9a9cff', // Indigo / Light Purple (Azul Índigo)
  '#b99aff': '#b99aff', // Purple / Amethyst (Roxo / Violeta)
  '#c2c2c2': '#c2c2c2', // Gray (Cinzento)
  '#cabdbf': '#cabdbf', // Pale Gray / Brown Gray (Cinzento Acastanhado)
  '#cca6ac': '#cca6ac', // Pink Gray (Cinzento Rosa)
  '#f691b2': '#f691b2', // Pink / Flamingo (Rosa)
  '#cd74e6': '#cd74e6', // Magenta / Purple Light (Magenta Claro)
  '#a47ae2': '#a47ae2'  // Grape / Deep Purple (Roxo Uva)
};

export function resolveCalendarColor(color?: string | null): string {
  return color && /^#[\da-f]{6}$/i.test(color)
    ? googleCalendarPalette[color.toLowerCase()] ?? color
    : 'var(--mat-sys-primary)';
}
