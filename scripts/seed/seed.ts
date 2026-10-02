import { CalendarSeeder } from './events-seed/calendar-seeder';

async function runAllSeeds() {
  console.log('==================================================');
  console.log('🌱 EXECUTADOR GERAL DE SEEDS (ORQUESTRADOR)');
  console.log('==================================================');

  // Seedeers
  await new CalendarSeeder().execute();

  console.log('\n==================================================');
  console.log('✨ TODOS OS SEEDS FORAM EXECUTADOS COM SUCESSO!');
  console.log('==================================================');
}

runAllSeeds();
