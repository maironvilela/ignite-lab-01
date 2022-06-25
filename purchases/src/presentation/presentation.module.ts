import { Module } from '@nestjs/common';
import { DataModule } from '~/data/data.module';
import { AddProductController } from './controllers/add-products';

@Module({})
@Module({
  providers: [AddProductController],
  exports: [AddProductController],
  imports: [DataModule]
})
export class PresentationModule {}
