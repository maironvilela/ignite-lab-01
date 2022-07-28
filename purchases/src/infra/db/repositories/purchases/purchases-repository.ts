import {
  AddPurchaseParams,
  AddPurchaseRepository,
  ListAllPurchasesRepository
} from '~/data/protocols';
import { Purchase } from '~/domain/models';
import { PrismaService } from '../../prisma/prisma.service';

export class PurchasesPrismaRepository
  implements ListAllPurchasesRepository, AddPurchaseRepository
{
  constructor(private prisma: PrismaService) {}
  async addPurchases({
    customerId,
    productId
  }: AddPurchaseParams): Promise<Purchase> {
    const purchase = this.prisma.purchases.create({
      data: {
        customerId,
        productId
      }
    });

    return purchase;
  }

  async listAll(): Promise<Purchase[]> {
    return await this.prisma.purchases.findMany();
  }
}
