import { ProductDTO } from '~/data/dto/';

export interface FindProductByIdRepository {
  findById(id: string): Promise<ProductDTO>;
}
