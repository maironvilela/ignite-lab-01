import { Query, Resolver } from '@nestjs/graphql';
import { resolverAdapter } from '~/main/adapters';
import { ListAllPurchasesControllerFactory } from '~/main/factories';
import { Purchases } from '../../models/purchases';

@Resolver()
export class ListAllPurchasesResolver {
  constructor(
    private listAllPurchasesControllerFactory: ListAllPurchasesControllerFactory
  ) {}
  @Query(() => [Purchases])
  purchases() {
    const listProductsController =
      this.listAllPurchasesControllerFactory.makeListAllPurchasesController();
    return resolverAdapter(listProductsController);
  }
}
