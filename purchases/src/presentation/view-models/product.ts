import { Product } from '~/domain/models';

export class ProductViewModel {
  id: string;
  title?: string;
  slug?: string;
  createdAt: string;
  updatedAt: string;

  static map(entity: Product): ProductViewModel {
    const productViewModel = {
      ...entity,
      createdAt: entity.createdAt.toISOString(),
      updatedAt: entity.updatedAt.toISOString()
    };
    return productViewModel;
  }

  static mapCollection(entities: Product[]): ProductViewModel[] {
    return entities.map((entity) => ProductViewModel.map(entity));
  }
}
