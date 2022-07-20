import { FindProductByIdRepository } from '~/data/protocols/db/product/find-product-by-id';
import { FindProductByIdUseCase } from '~/domain/usecases/product/find-product-by-id';
import { Product } from '~/infra';

export class FindProductByIdService implements FindProductByIdUseCase {
  constructor(private findProductByIdRepository: FindProductByIdRepository) {}
  async findById(id: string): Promise<Product> {
    return this.findProductByIdRepository.findById(id);
  }
}
