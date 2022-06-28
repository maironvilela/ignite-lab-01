import { FindProductByTitleRepository } from '~/data/protocols/db/product/find-product-by-title';
import { FindProductByTitleUseCase } from '~/domain/usecases/product/find-product-by-title';
import { Product } from '~/infra';

export class FindProductByTitleService implements FindProductByTitleUseCase {
  constructor(
    private readonly findProductByTitleRepository: FindProductByTitleRepository
  ) {}
  async findByTitle(title: string): Promise<Product> {
    return await this.findProductByTitleRepository.findByTitle(title);
  }
}
