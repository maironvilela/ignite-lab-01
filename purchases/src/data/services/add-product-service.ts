import { Injectable } from '@nestjs/common';
import {
  AddProduct,
  AddProductModel
} from '~/domain/usecases/product/add-product';
import { AddProductDTO } from '../dto';
import { AddProductRepository } from '../protocols';

@Injectable()
export class AddProductService implements AddProduct {
  constructor(private repository: AddProductRepository) {}

  async add(data: AddProductModel): Promise<AddProductDTO> {
    const title = data.title;
    const slug = data.title.replace(' ', '-').toLocaleLowerCase();
    return await this.repository.add({ title, slug });
  }
}
