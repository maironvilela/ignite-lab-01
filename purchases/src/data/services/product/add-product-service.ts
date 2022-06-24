import { Injectable } from '@nestjs/common';
import { AddProductDTO } from '~/data/dto';
import { AddProductRepository } from '~/data/protocols';
import {
  AddProduct,
  AddProductModel
} from '~/domain/usecases/product/add-product';

@Injectable()
export class AddProductService implements AddProduct {
  constructor(private repository: AddProductRepository) {}

  async add(data: AddProductModel): Promise<AddProductDTO> {
    const title = data.title;
    const slug = data.title.replace(' ', '-').toLocaleLowerCase();
    return await this.repository.add({ title, slug });
  }
}
