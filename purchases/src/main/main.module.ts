import { Module } from '@nestjs/common';
import { PrismaService } from '~/infra/db/prisma/prisma.service';
import { InfraModule } from '~/infra/infra.module';
import { PresentationModule } from '~/presentation/presentation.module';
import { AddProductControllerFactory } from './factories/add-product';
import { ListProductControllerFactory } from './factories/list-products';
import { CreateProductResolver } from './graphql/resolvers/product/create-product/create-product.resolver';
import { ListAllProductResolver } from './graphql/resolvers/product/list-all-product/list-all-product.resolver';

@Module({
  providers: [
    ListAllProductResolver,
    CreateProductResolver,
    AddProductControllerFactory,
    ListProductControllerFactory,
    PrismaService
  ],
  imports: [PresentationModule, PrismaService, InfraModule]
})
export class MainModule {}
