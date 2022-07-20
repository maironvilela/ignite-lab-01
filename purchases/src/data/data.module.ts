import { Module } from '@nestjs/common';
import { InfraModule } from '~/infra/infra.module';
import { AddProductService, FindProductByTitleService } from './services';
import { FindProductByIdService } from './services/product/find-product-by-id';
import { ListProductService } from './services/product/list-products-service';

@Module({
  providers: [
    AddProductService,
    FindProductByTitleService,
    ListProductService,
    FindProductByIdService
  ],
  exports: [
    AddProductService,
    FindProductByTitleService,
    ListProductService,
    FindProductByIdService
  ],
  imports: [InfraModule]
})
export class DataModule {}
