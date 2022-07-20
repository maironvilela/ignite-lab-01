import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { resolverAdapter } from '~/main/adapters';
import { ListAllPurchasesControllerFactory } from '~/main/factories';
import { FindProductByIdFactory } from '~/main/factories/products/find-product-by-id';
import { Product } from '../../models/product';
import { Purchases } from '../../models/purchases';

@Resolver(() => Purchases)
export class ListAllPurchasesResolver {
  constructor(
    private listAllPurchasesControllerFactory: ListAllPurchasesControllerFactory,
    private findProductByIdFactory: FindProductByIdFactory
  ) {}
  @Query(() => [Purchases])
  purchases() {
    const listProductsController =
      this.listAllPurchasesControllerFactory.makeListAllPurchasesController();
    return resolverAdapter(listProductsController);
  }
  @ResolveField(() => Product)
  product(@Parent() purchases: Purchases) {
    const findProductByIdService =
      this.findProductByIdFactory.makeFindProductByIdService();
    return findProductByIdService.findById(purchases.productId);
  }
}
