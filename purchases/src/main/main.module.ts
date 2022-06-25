import { Module } from '@nestjs/common';
import { PresentationModule } from '~/presentation/presentation.module';
import { CreateProductResolver } from './graphql/resolvers/product/create-product/create-product.resolver';
import { ListAllProductResolver } from './graphql/resolvers/product/list-all-product/list-all-product.resolver';

@Module({
  providers: [ListAllProductResolver, CreateProductResolver],
  imports: [PresentationModule]
})
export class MainModule {}
