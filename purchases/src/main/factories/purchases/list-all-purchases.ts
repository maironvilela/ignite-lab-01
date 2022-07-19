import { Injectable } from '@nestjs/common';
import { ListAllPurchasesService } from '~/data/services/purchases/list-all-purchases';
import { PrismaService } from '~/infra/db/prisma/prisma.service';
import { PurchasesPrismaRepository } from '~/infra/db/repositories/purchases/purchases-repository';
import { ListAllPurchasesController } from '~/presentation/controllers';

@Injectable()
export class ListAllPurchasesControllerFactory {
  constructor(private prisma: PrismaService) {}
  makeListAllPurchasesController = (): ListAllPurchasesController => {
    const repository = new PurchasesPrismaRepository(this.prisma);
    const listAllPurchasesService: ListAllPurchasesService =
      new ListAllPurchasesService(repository);
    return new ListAllPurchasesController(listAllPurchasesService);
  };
}
