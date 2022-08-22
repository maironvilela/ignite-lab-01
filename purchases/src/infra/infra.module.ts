import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { ProductRepository } from './db/repositories/product/product-repository';
import { AuthorizationGuard } from './http/auth/authorization.guard';
import { KafkaService } from './messaging/kafka/config/kafka.service';

@Module({
  providers: [ProductRepository, AuthorizationGuard, KafkaService],
  exports: [ProductRepository, AuthorizationGuard, KafkaService],
  imports: [ConfigModule.forRoot()]
})
export class InfraModule {}
