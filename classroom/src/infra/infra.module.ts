import { Module } from '@nestjs/common';
import { PrismaService } from './db/prisma/prisma.service';
import { PurchasesController } from './messaging/kafka/controllers/purchases.controller';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
  controllers: [PurchasesController],
})
export class InfraModule {}
