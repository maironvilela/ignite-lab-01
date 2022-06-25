import { Product } from '~/domain/models';

export type AddProductModel = {
  title: string;
};

export interface AddProductUseCase {
  add: (product: AddProductModel) => Promise<Product>;
}
