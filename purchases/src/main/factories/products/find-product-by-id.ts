import { Injectable } from '@nestjs/common';
import { FindProductByIdService } from '~/data/services/product/find-product-by-id';
import { PrismaService } from '~/infra/db/prisma/prisma.service';
import { ProductRepository } from '~/infra/db/repositories/product/product-repository';

@Injectable()
export class FindProductByIdFactory {
  constructor(private prisma: PrismaService) {}

  makeFindProductByIdService(): FindProductByIdService {
    const findProductByIdRepository = new ProductRepository(this.prisma);
    return new FindProductByIdService(findProductByIdRepository);
  }
}
