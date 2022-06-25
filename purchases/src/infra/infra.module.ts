import { Module } from '@nestjs/common';
import { ProductRepository } from './db/repositories/product/product-repository';

@Module({
  providers: [ProductRepository],
  exports: [ProductRepository]
})
export class InfraModule {}
