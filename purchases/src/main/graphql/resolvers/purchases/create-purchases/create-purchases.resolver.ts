import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthorizationGuard } from '~/infra/http/auth/authorization.guard';
import { AuthUser, CurrentUser } from '~/infra/http/auth/currente-user';
import { resolverAdapter } from '~/main/adapters';
import { AddPurchaseControllerFactor } from '~/main/factories';
import { CreatePurchasesInput } from '~/main/graphql/inputs/CreatePurchasesInput';
import { Purchases } from '~/main/graphql/models/purchases';

@Resolver(() => Purchases)
export class CreatePurchasesResolver {
  constructor(
    private addPurchaseControllerFactory: AddPurchaseControllerFactor
  ) {}
  @Mutation(() => Purchases)
  @UseGuards(AuthorizationGuard)
  async createPurchases(
    @Args('data') { productId }: CreatePurchasesInput,
    @CurrentUser() user: AuthUser
  ) {
    const request = {
      body: {
        productId,
        authUserId: user.sub
      }
    };

    const controller =
      this.addPurchaseControllerFactory.makeAddPurchasesController();

    return resolverAdapter(controller, request);
  }
}
