import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { resolverAdapter } from '~/main/adapters';
import { AddProductControllerFactory } from '~/main/factories';
import { CreateProductInput } from '~/main/graphql/inputs/CreateProductInput';
import { Product } from '~/main/graphql/models/product';

@Resolver()
export class CreateProductResolver {
  constructor(
    private addProductControllerFactory: AddProductControllerFactory
  ) {}
  @Mutation(() => Product)
  async createProduct(@Args('data') { title }: CreateProductInput) {
    const request = { body: { title } };
    const controller =
      this.addProductControllerFactory.makeAddProductController();
    return resolverAdapter(controller, request);
  }
}
