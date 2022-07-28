import { Injectable } from '@nestjs/common';
import { AddPurchaseService } from '~/data/services/purchases/add-purchase/add-purchase.service';
import { PrismaService } from '~/infra/db/prisma/prisma.service';
import { CustomerPrismaRepository } from '~/infra/db/repositories/customer/customer-repository';
import { ProductRepository } from '~/infra/db/repositories/product/product-repository';
import { PurchasesPrismaRepository } from '~/infra/db/repositories/purchases/purchases-repository';
import { AddPurchaseController } from '~/presentation/controllers/purchases/add-purchase';
import { Controller } from '~/presentation/protocols';

@Injectable()
export class AddPurchaseControllerFactor {
  constructor(private prisma: PrismaService) {}

  makeAddPurchasesController = (): Controller => {
    const customerRepository = new CustomerPrismaRepository(this.prisma);
    const findProductByIdRepository = new ProductRepository(this.prisma);
    const addPurchaseRepository = new PurchasesPrismaRepository(this.prisma);

    const addPurchaseService = new AddPurchaseService(
      customerRepository,
      customerRepository,
      findProductByIdRepository,
      addPurchaseRepository
    );
    return new AddPurchaseController(addPurchaseService);
  };
}
