import { Module } from '@nestjs/common';
import { PrismaService } from '~/infra/db/prisma/prisma.service';
import { InfraModule } from '~/infra/infra.module';
import { PresentationModule } from '~/presentation/presentation.module';
import { ListAllPurchasesControllerFactory } from './factories';
import { AddProductControllerFactory } from './factories/products/add-product';
import { FindProductByIdFactory } from './factories/products/find-product-by-id';
import { ListProductControllerFactory } from './factories/products/list-products';
import { CreateProductResolver } from './graphql/resolvers/product/create-product/create-product.resolver';
import { ListAllProductResolver } from './graphql/resolvers/product/list-all-product/list-all-product.resolver';
import { ListAllPurchasesResolver } from './graphql/resolvers/purchases/list-all-product.resolver';

@Module({
  providers: [
    ListAllProductResolver,
    CreateProductResolver,
    ListAllPurchasesResolver,

    AddProductControllerFactory,
    ListProductControllerFactory,
    ListAllPurchasesControllerFactory,
    FindProductByIdFactory,

    PrismaService
  ],
  imports: [PresentationModule, PrismaService, InfraModule]
})
export class MainModule {}
