import { ListAllPurchasesRepository } from '~/data/protocols';
import { Purchase } from '~/domain/models';
import { ListAllPurchasesUseCase } from '~/domain/usecases';

export class ListAllPurchasesService implements ListAllPurchasesUseCase {
  constructor(private repository: ListAllPurchasesRepository) {}
  async execute(): Promise<Purchase[]> {
    const purchases = await this.repository.listAll();
    return purchases;
  }
}
