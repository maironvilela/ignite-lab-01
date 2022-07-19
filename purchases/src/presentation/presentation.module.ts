import { Module } from '@nestjs/common';
import { DataModule } from '~/data/data.module';
import {
  AddProductController,
  ListAllPurchasesController
} from './controllers';
@Module({
  providers: [AddProductController, ListAllPurchasesController],
  exports: [AddProductController, ListAllPurchasesController],
  imports: [DataModule]
})
export class PresentationModule {}
