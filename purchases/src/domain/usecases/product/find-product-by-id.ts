import { Product } from '~/domain/models';

export interface FindProductByIdUseCase {
  findById(id: string): Promise<Product>;
}
