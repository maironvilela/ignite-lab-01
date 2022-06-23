import { Module } from '@nestjs/common';
import { PrismaService } from './db/prisma/prisma.service';
import { ProductRepository } from './db/prisma/product/product-repository';

@Module({
  providers: [PrismaService, ProductRepository],
  exports: [ProductRepository]
})
export class InfraModule {}
