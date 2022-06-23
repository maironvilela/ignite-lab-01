import { Product } from '~/domain/models';

export type AddProductModel = {
  title: string;
};

export interface AddProduct {
  add: (product: AddProductModel) => Promise<Product>;
}
