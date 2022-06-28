import { Module } from '@nestjs/common';
import { InfraModule } from '~/infra/infra.module';
import { AddProductService, FindProductByTitleService } from './services';
import { ListProductService } from './services/product/list-products-service';

@Module({
  providers: [AddProductService, FindProductByTitleService, ListProductService],
  exports: [AddProductService, FindProductByTitleService, ListProductService],
  imports: [InfraModule]
})
export class DataModule {}
