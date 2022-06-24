import { Module } from '@nestjs/common';
import { InfraModule } from '~/infra/infra.module';
import { CreateProductResolver } from './graphql/resolvers/product/create-product/create-product.resolver';
import { ListAllProductResolver } from './graphql/resolvers/product/list-all-product/list-all-product.resolver';

@Module({
  providers: [ListAllProductResolver, CreateProductResolver],
  imports: [InfraModule]
})
export class MainModule {}
