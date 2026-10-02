import { CalendarSeeder } from './events-seed/calendar-seeder';

async function revertAllSeeds() {
  console.log('==================================================');
  console.log('🗑️ EXECUTADOR GERAL DE EXCLUSÃO (REVERSÃO DE SEEDS)');
  console.log('==================================================');

  // Seedeers - delete/reversão
  await new CalendarSeeder().delete();

  console.log('\n==================================================');
  console.log('✨ TODAS AS REVERSÕES FORAM CONCLUÍDAS!');
  console.log('==================================================');
}

revertAllSeeds();
