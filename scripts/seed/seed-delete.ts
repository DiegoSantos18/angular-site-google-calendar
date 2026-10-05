import { CalendarSeeder } from './events-seed/calendar-seeder';

async function revertAllSeeds() {
  console.log('==================================================');
  console.log('🗑️ EXECUTADOR GERAL DE EXCLUSÃO (REVERSÃO DE SEEDS)');
  console.log('==================================================');

  // Seedeers - delete/reversão
  await new CalendarSeeder().delete();

  console.log('\n==================================================');
  console.log('Rotina de reversão encerrada.');
  console.log('==================================================');
}

revertAllSeeds().catch(error => {
  console.error('Falha ao reverter os dados de demonstração:', error);
  process.exitCode = 1;
});
