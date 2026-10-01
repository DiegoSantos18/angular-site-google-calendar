export const environment = {
  production: false,
  google_calendar_id: '4a3d5eadf831090a9211933f4b3323fc992bf5cb7314ad686b685333dca9e462@group.calendar.google.com',
  apiUrl: 'http://localhost:3000/api',
  // Verifica novos eventos a cada 5 minutos (300000 ms) - Simula um SignalR
  apiPooling: 300000 // Usar 0 para desligar
};
