import { ListAllPurchasesRepository } from '~/data/protocols';
import { Purchases } from '~/domain/models';
import { PrismaService } from '../../prisma/prisma.service';

export class PurchasesPrismaRepository implements ListAllPurchasesRepository {
  constructor(private prisma: PrismaService) {}

  async listAll(): Promise<Purchases[]> {
    return await this.prisma.purchases.findMany();
  }
}
