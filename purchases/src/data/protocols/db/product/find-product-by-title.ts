import { ProductDTO } from '~/data/dto/';

export interface FindProductByTitleRepository {
  findByTitle(title: string): Promise<ProductDTO>;
}
