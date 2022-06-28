import { Product } from '~/domain/models';

export interface FindProductByTitleUseCase {
  findByTitle(title: string): Promise<Product>;
}
