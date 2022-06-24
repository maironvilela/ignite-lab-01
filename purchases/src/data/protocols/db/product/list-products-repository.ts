import { AddProductDTO } from '~/data/dto/';

export interface ListProductsRepository {
  listProducts: () => Promise<AddProductDTO[]>;
}
