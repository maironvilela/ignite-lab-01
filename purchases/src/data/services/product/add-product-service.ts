import { ProductDTO } from '~/data/dto';
import { FindProductByTitleRepository } from '~/data/protocols/db/product/find-product-by-title';
import {
  AddProductModel,
  AddProductUseCase
} from '~/domain/usecases/product/add-product';
import { AddProductRepository } from '~/infra';

export class AddProductService implements AddProductUseCase {
  constructor(
    private readonly addProductRepository: AddProductRepository,
    private readonly findProductByTitleRepository: FindProductByTitleRepository
  ) {}

  async add({ title }: AddProductModel): Promise<ProductDTO> {
    const slug = title.replace(' ', '-').toLocaleLowerCase();

    const isProductExists = await this.findProductByTitleRepository.findByTitle(
      title
    );

    if (isProductExists) {
      return null;
    }
    return await this.addProductRepository.add({ title, slug });
  }
}
