import { Module } from '@nestjs/common';
import { DataModule } from '~/data/data.module';
import {
  AddProductController,
  ListAllPurchasesController
} from './controllers';
import { MeController } from './controllers/customer/me';
import { AddPurchaseController } from './controllers/purchases/add-purchase';
@Module({
  providers: [
    AddProductController,
    ListAllPurchasesController,
    AddPurchaseController,
    MeController
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
