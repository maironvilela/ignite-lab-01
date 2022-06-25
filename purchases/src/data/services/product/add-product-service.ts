import { Injectable } from '@nestjs/common';
import { AddProductDTO } from '~/data/dto';
import {
  AddProductModel,
  AddProductUseCase
} from '~/domain/usecases/product/add-product';
import { ProductRepository } from '~/infra/db/repositories/product/product-repository';

@Injectable()
export class AddProductService implements AddProductUseCase {
  constructor(private repository: ProductRepository) {}

  async add(data: AddProductModel): Promise<AddProductDTO> {
    const title = data.title;
    const slug = data.title.replace(' ', '-').toLocaleLowerCase();
    return await this.repository.add({ title, slug });
  }
}
