import { UseGuards } from '@nestjs/common';
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { AuthorizationGuard } from '~/infra/http/auth/authorization.guard';
import { AuthUser, CurrentUser } from '~/infra/http/auth/currente-user';
import { resolverAdapter } from '~/main/adapters';
import { MeControllerFactory } from '~/main/factories';
import { ListAllPurchasesFromCustomerServiceFactory } from '~/main/factories/purchases/list-all-purchases-from-customer';
import { Customer } from '~/main/graphql/models';

@Resolver(() => Customer)
export class MeResolver {
  constructor(
    private meControllerFactory: MeControllerFactory,
    private listAllPurchasesFromCustomerServiceFactory: ListAllPurchasesFromCustomerServiceFactory
  ) {}

  @Query(() => Customer)
  @UseGuards(AuthorizationGuard)
  async me(@CurrentUser() user: AuthUser) {
    const request = {
      body: {
        authUserId: user.sub
      }
    };
    const controller = this.meControllerFactory.makeMeController();
    return resolverAdapter(controller, request);
  }

  @ResolveField()
  async purchases(@Parent() customer: Customer) {
    const listAllPurchasesService =
      this.listAllPurchasesFromCustomerServiceFactory.makeListAllPurchasesFromCustomerService();
    const purchases =
      await listAllPurchasesService.listAllPurchasesFromCustomer(customer.id);
    return purchases;
  }
}
