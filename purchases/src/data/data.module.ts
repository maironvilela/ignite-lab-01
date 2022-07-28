import { Module } from '@nestjs/common';
import { InfraModule } from '~/infra/infra.module';
import { AddProductService, FindProductByTitleService } from './services';
import { FindProductByIdService } from './services/product/find-product-by-id';
import { ListProductService } from './services/product/list-products-service';
import { AddPurchaseService } from './services/purchases/add-purchase/add-purchase.service';

@Module({
  providers: [
    AddProductService,
    FindProductByTitleService,
    ListProductService,
    FindProductByIdService,
    AddPurchaseService
  ],
  exports: [
    AddProductService,
    FindProductByTitleService,
    ListProductService,
    FindProductByIdService,
    AddPurchaseService
  ],
  imports: [InfraModule]
})
export class DataModule {}
