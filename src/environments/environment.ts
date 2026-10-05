export const environment = {
  production: true,
  apiUrl: 'https://angular-site-google-calendar.vercel.app/api',
  // Verifica novos eventos a cada 5 minutos (300000 ms) - Simula um SignalR
  apiPooling: 300000 // Usar 0 para desligar
};
