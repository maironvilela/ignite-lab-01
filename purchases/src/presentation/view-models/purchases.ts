import { Purchases } from '~/domain/models';

export class PurchasesViewModel {
  id: string;
  status: string;
  createdAt: string;
  updatedAt: string;

  static map(entity: Purchases): PurchasesViewModel {
    const purchasesViewModel = {
      ...entity,
      createdAt: entity.createdAt.toISOString(),
      updatedAt: entity.updatedAt.toISOString()
    };
    return purchasesViewModel;
  }

  static mapCollection(entities: Purchases[]): PurchasesViewModel[] {
    return entities.map((entity) => PurchasesViewModel.map(entity));
  }
}
