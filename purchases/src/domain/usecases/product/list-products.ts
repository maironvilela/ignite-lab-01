import { Product } from '~/domain/models';

export interface ListProductsUseCase {
  listProducts: () => Promise<Product[]>;
}
