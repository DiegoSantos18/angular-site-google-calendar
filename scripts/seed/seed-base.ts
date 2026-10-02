import * as dotenv from 'dotenv';

dotenv.config();

export abstract class SeedBase<T> {
  protected apiUrl: string;

  constructor() {
    this.apiUrl = process.env.API_URL_SEED || '';
    if (!this.apiUrl) {
      console.error('[X] Erro Crítico: A variável de ambiente API_URL_SEED não está definida no arquivo .env');
      process.exit(1);
    }
  }

  protected abstract getSeedData(): T[];
  protected abstract getEndpointPath(): string;
  protected abstract transformItem(item: T): any;
  protected abstract getSeederName(): string;

  /**
   * Executa a carga (Insert / Seed)
   */
  public async execute(): Promise<void> {
    const endpoint = `${this.apiUrl}${this.getEndpointPath()}`;
    const items = this.getSeedData();

    console.log(`\n--------------------------------------------------`);
    console.log(`🚀 [${this.getSeederName()}] Iniciando carga (${items.length} itens)`);
    console.log(`🔗 Endpoint: ${endpoint}`);
    console.log(`--------------------------------------------------`);

    let successCount = 0;
    let errorCount = 0;

    for (const [index, item] of items.entries()) {
      const progress = `[${index + 1}/${items.length}]`;

      try {
        const payload = this.transformItem(item);

        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const errText = await response.text();
          console.error(`❌ ${progress} Erro ao processar item: ${errText}`);
          errorCount++;
        } else {
          console.log(`✅ ${progress} Item processado com sucesso.`);
          successCount++;
        }
      } catch (error) {
        console.error(`❌ ${progress} Falha de conexão:`, error);
        errorCount++;
      }
    }

    console.log(`\n📊 [${this.getSeederName()}] Resumo (Carga): ✅ Sucessos: ${successCount} | ❌ Erros: ${errorCount} | 📦 Total: ${items.length}`);
  }

  /**
   * Executa a reversão (Delete) de forma padrão
   */
  public async delete(): Promise<void> {
    console.log(`\n--------------------------------------------------`);
    console.log(`🗑️ [${this.getSeederName()}] Iniciando exclusão/reversão...`);
    console.log(`--------------------------------------------------`);

    try {
      const getEndpoint = `${this.apiUrl}/calendar?action=get-events`;
      const response = await fetch(getEndpoint, { method: 'GET' });

      if (!response.ok) {
        console.error(`❌ [${this.getSeederName()}] Erro ao buscar dados para exclusão.`);
        return;
      }

      const items: any[] = await response.json();

      if (items.length === 0) {
        console.log(`✨ [${this.getSeederName()}] Nenhum item encontrado para excluir.`);
        return;
      }

      let successCount = 0;
      let errorCount = 0;

      for (const [index, item] of items.entries()) {
        const progress = `[${index + 1}/${items.length}]`;
        const itemId = item.id;
        const label = item.summary || itemId;

        if (!itemId) continue;

        const deleteEndpoint = `${this.apiUrl}/calendar?action=delete-event&id=${itemId}`;

        try {
          const deleteRes = await fetch(deleteEndpoint, { method: 'DELETE' });

          if (!deleteRes.ok) {
            console.error(`❌ ${progress} Erro ao excluir "${label}"`);
            errorCount++;
          } else {
            console.log(`✅ ${progress} Excluído com sucesso: "${label}"`);
            successCount++;
          }
        } catch (error) {
          console.error(`❌ ${progress} Falha de conexão ao excluir "${label}":`, error);
          errorCount++;
        }
      }

      console.log(`\n📊 [${this.getSeederName()}] Resumo (Exclusão): ✅ Removidos: ${successCount} | ❌ Erros: ${errorCount} | 📦 Total: ${items.length}`);
    } catch (error) {
      console.error(`❌ [${this.getSeederName()}] Erro crítico ao processar exclusão:`, error);
    }
  }
}
