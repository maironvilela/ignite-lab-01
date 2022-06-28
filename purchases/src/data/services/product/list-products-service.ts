import { ListProductsRepositoryProtocol } from '~/data/protocols';
import { ListProductsUseCase } from '~/domain/usecases/product/list-products';
import { Product } from '~/infra';

export class ListProductService implements ListProductsUseCase {
  constructor(private repository: ListProductsRepositoryProtocol) {}
  async listProducts(): Promise<Product[]> {
    return await this.repository.listProducts();
  }
}
