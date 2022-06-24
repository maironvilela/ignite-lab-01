import { Module } from '@nestjs/common';
import { PrismaService } from './db/prisma/prisma.service';
import { ProductRepository } from './db/repositories/product/product-repository';

@Module({
  providers: [ProductRepository, PrismaService],
  exports: [ProductRepository]
})
export class InfraModule {}
