import { Module } from '@nestjs/common';
import { InfraModule } from '~/infra/infra.module';
import { AddProductService } from './services';

@Module({
  providers: [AddProductService],
  exports: [AddProductService],
  imports: [InfraModule]
})
export class DataModule {}
