import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { AuthorizationGuard } from '~/infra/http/auth/authorization.guard';
import { resolverAdapter } from '~/main/adapters';
import { ListProductControllerFactory } from '~/main/factories';
import { Product } from '~/main/graphql/models/product';

@Resolver(() => Product)
export class ListAllProductResolver {
  constructor(
    private listProductsControllerFactory: ListProductControllerFactory
  ) {}
  @Query(() => [Product])
  @UseGuards(AuthorizationGuard)
  products() {
    const listProductsController =
      this.listProductsControllerFactory.makeListProductController();
    return resolverAdapter(listProductsController);
  }
}
