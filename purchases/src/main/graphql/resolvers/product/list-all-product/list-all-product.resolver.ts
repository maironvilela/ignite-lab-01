import { Query, Resolver } from '@nestjs/graphql';
import { resolverAdapter } from '~/main/adapters';
import { ListProductControllerFactory } from '~/main/factories';
import { Product } from '~/main/graphql/models/product';

@Resolver()
export class ListAllProductResolver {
  constructor(
    private listProductsControllerFactory: ListProductControllerFactory
  ) {}
  @Query(() => [Product])
  products() {
    const listProductsController =
      this.listProductsControllerFactory.makeListProductController();
    return resolverAdapter(listProductsController);
  }
}
