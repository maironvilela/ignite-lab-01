import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import * as path from 'path';
import { InfraModule } from './infra/infra.module';
import { TestResolver } from './test/test.resolver';

console.log(path.resolve(process.cwd(), 'src/graphql/schema.gql'));

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(
        process.cwd(),
        'src/infra/config/graphql/schema.gql',
      ),
    }),
    InfraModule,
  ],
  controllers: [],
  providers: [TestResolver],
})
export class AppModule {}
