import { Module } from '@nestjs/common';
import { InfraModule } from '~/infra/infra.module';
import { AddProductService, FindProductByTitleService } from './services';
import { FindCustomerByAuthUserIdService } from './services/customer/find-by-auth-user-id';
import { FindProductByIdService } from './services/product/find-product-by-id';
import { ListProductService } from './services/product/list-products-service';
import { AddPurchaseService } from './services/purchases/add-purchase/add-purchase.service';

@Module({
  providers: [
    AddProductService,
    FindProductByTitleService,
    ListProductService,
    FindProductByIdService,
    AddPurchaseService,
    FindCustomerByAuthUserIdService
  ],
  exports: [
    AddProductService,
    FindProductByTitleService,
    ListProductService,
    FindProductByIdService,
    AddPurchaseService,
    FindCustomerByAuthUserIdService
  ],
  imports: [InfraModule]
})
export class DataModule {}
