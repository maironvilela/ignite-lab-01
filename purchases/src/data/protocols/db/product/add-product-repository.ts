import { ProductDTO } from '~/data/dto/';

export type AddProductProps = {
  title: string;
  slug: string;
};

export interface AddProductRepository {
  add: (data: AddProductProps) => Promise<ProductDTO>;
}
