import { Module } from '@nestjs/common';
import { PrismaService } from '~/infra/db/prisma/prisma.service';
import { InfraModule } from '~/infra/infra.module';
import { PresentationModule } from '~/presentation/presentation.module';
import {
  AddPurchaseControllerFactor,
  ListAllPurchasesControllerFactory
} from './factories';
import { AddProductControllerFactory } from './factories/products/add-product';
import { FindProductByIdFactory } from './factories/products/find-product-by-id';
import { ListProductControllerFactory } from './factories/products/list-products';
import { CreateProductResolver } from './graphql/resolvers/product/create-product/create-product.resolver';
import { ListAllProductResolver } from './graphql/resolvers/product/list-all-product/list-all-product.resolver';
import { ListAllPurchasesResolver } from './graphql/resolvers/purchases/list-all-product.resolver';

import { ConfigModule } from '@nestjs/config';
import { CreatePurchasesResolver } from './graphql/resolvers/purchases/create-purchases/create-purchases.resolver';

@Module({
  providers: [
    ListAllProductResolver,
    CreateProductResolver,
    CreatePurchasesResolver,
    ListAllPurchasesResolver,

    AddProductControllerFactory,
    AddPurchaseControllerFactor,
    ListProductControllerFactory,
    ListAllPurchasesControllerFactory,
    FindProductByIdFactory,

    PrismaService
  ],
  imports: [
    PresentationModule,
    PrismaService,
    InfraModule,
    ConfigModule.forRoot()
  ]
})
export class MainModule {}
