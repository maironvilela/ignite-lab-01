import { ProductDTO } from '~/data/dto/';

export interface ListProductsRepositoryProtocol {
  listProducts: () => Promise<ProductDTO[]>;
}
