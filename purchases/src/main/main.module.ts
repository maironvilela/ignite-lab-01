import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'path';
import { ProductRepository } from '~/infra/db/prisma/product/product-repository';
import { InfraModule } from '~/infra/infra.module';
import { CreateProductResolver } from './graphql/resolvers/product/create-product/create-product.resolver';
import { ListAllProductResolver } from './graphql/resolvers/product/list-all-product/list-all-product.resolver';

@Module({
  imports: [
    ConfigModule.forRoot(),
    InfraModule,
    ProductRepository,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql')
    })
  ],
  providers: [ListAllProductResolver, CreateProductResolver]
})
export class MainModule {}
