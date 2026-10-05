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

export const googleCalendarPalette: Record<string, { hex: string; label: string }> = {
  '#ac725e': { hex: '#ac725e', label: 'Castanho' },
  '#d06b64': { hex: '#d06b64', label: 'Vermelho claro' },
  '#f83a22': { hex: '#f83a22', label: 'Vermelho escuro' },
  '#fa573c': { hex: '#fa573c', label: 'Laranja' },
  '#ff7537': { hex: '#ff7537', label: 'Laranja claro' },
  '#ffad46': { hex: '#ffad46', label: 'Tangerina' },
  '#42d692': { hex: '#42d692', label: 'Turquesa' },
  '#16a765': { hex: '#16a765', label: 'Verde' },
  '#7bd148': { hex: '#7bd148', label: 'Verde-limão' },
  '#b3dc6c': { hex: '#b3dc6c', label: 'Verde amarelado' },
  '#fbe983': { hex: '#fbe983', label: 'Amarelo' },
  '#fad165': { hex: '#fad165', label: 'Amarelo claro' },
  '#92e1c0': { hex: '#92e1c0', label: 'Verde-água' },
  '#9fe1e7': { hex: '#9fe1e7', label: 'Ciano' },
  '#9fc6e7': { hex: '#9fc6e7', label: 'Azul claro' },
  '#4986e7': { hex: '#4986e7', label: 'Azul' },
  '#9a9cff': { hex: '#9a9cff', label: 'Índigo' },
  '#b99aff': { hex: '#b99aff', label: 'Violeta' },
  '#c2c2c2': { hex: '#c2c2c2', label: 'Cinza' },
  '#cabdbf': { hex: '#cabdbf', label: 'Cinza amarronzado' },
  '#cca6ac': { hex: '#cca6ac', label: 'Rosa acinzentado' },
  '#f691b2': { hex: '#f691b2', label: 'Rosa' },
  '#cd74e6': { hex: '#cd74e6', label: 'Magenta' },
  '#a47ae2': { hex: '#a47ae2', label: 'Uva' }
};

export function resolveCalendarColor(color?: string | null): string {
  return color && /^#[\da-f]{6}$/i.test(color)
    ? googleCalendarPalette[color.toLowerCase()]?.hex ?? color
    : 'var(--mat-sys-primary)';
}
