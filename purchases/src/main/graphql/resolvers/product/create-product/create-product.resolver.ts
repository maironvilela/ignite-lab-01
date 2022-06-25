import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateProductInput } from '~/main/graphql/inputs/CreateProductInput';
import { Product } from '~/main/graphql/models/product';
import { resolverAdapter } from '~/presentation/adapters';
import { AddProductController } from '~/presentation/controllers/add-products';

@Resolver()
export class CreateProductResolver {
  constructor(private controller: AddProductController) {}
  @Mutation(() => Product)
  async createProduct(@Args('data') { title }: CreateProductInput) {
    const request = { body: { title } };
    return resolverAdapter(this.controller, request);
  }
}
