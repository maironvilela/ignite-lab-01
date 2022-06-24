import { Injectable } from '@nestjs/common';
import { ListProductsRepository } from '~/data/protocols/db/product/list-products-repository';
import { ListProductsUseCase } from '~/domain/usecases/product/list-products';
import { Product } from '~/infra';

@Injectable()
export class ListProductService implements ListProductsUseCase {
  constructor(private repository: ListProductsRepository) {}
  async listProducts(): Promise<Product[]> {
    return await this.repository.listProducts();
  }
}
