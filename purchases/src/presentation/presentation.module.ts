import { Module } from '@nestjs/common';
import { DataModule } from '~/data/data.module';
import {
  AddProductController,
  ListAllPurchasesController
} from './controllers';
import { AddPurchaseController } from './controllers/purchases/add-purchase';
@Module({
  providers: [
    AddProductController,
    ListAllPurchasesController,
    AddPurchaseController
  ],
  exports: [
    AddProductController,
    AddPurchaseController,
    ListAllPurchasesController,
    AddPurchaseController
  ],
  imports: [DataModule]
})
export class PresentationModule {}
