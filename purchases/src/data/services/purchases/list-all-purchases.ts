import { ListAllPurchasesRepository } from '~/data/protocols';
import { Purchases } from '~/domain/models';
import { ListAllPurchasesUseCase } from '~/domain/usecases';

export class ListAllPurchasesService implements ListAllPurchasesUseCase {
  constructor(private repository: ListAllPurchasesRepository) {}
  async execute(): Promise<Purchases[]> {
    const purchases = await this.repository.listAll();
    return purchases;
  }
}
