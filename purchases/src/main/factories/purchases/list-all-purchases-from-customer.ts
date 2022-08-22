import { Injectable } from '@nestjs/common';
import { ListAllPurchasesFromCustomerService } from '~/data/services/purchases/add-purchase/list-all-purchases-from-customer';
import { ListAllPurchasesFromCustomerUseCase } from '~/domain/usecases';
import { PrismaService } from '~/infra/db/prisma/prisma.service';
import { PurchasesPrismaRepository } from '~/infra/db/repositories/purchases/purchases-repository';

@Injectable()
export class ListAllPurchasesFromCustomerServiceFactory {
  constructor(private prisma: PrismaService) {}
  makeListAllPurchasesFromCustomerService =
    (): ListAllPurchasesFromCustomerUseCase => {
      const listAllPurchasesFromCustomerRepository =
        new PurchasesPrismaRepository(this.prisma);
      return new ListAllPurchasesFromCustomerService(
        listAllPurchasesFromCustomerRepository
      );
    };
}
