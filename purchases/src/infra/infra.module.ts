import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { ProductRepository } from './db/repositories/product/product-repository';
import { AuthorizationGuard } from './http/auth/authorization.guard';

@Module({
  providers: [ProductRepository, AuthorizationGuard],
  exports: [ProductRepository, AuthorizationGuard],
  imports: [ConfigModule.forRoot()]
})
export class InfraModule {}
