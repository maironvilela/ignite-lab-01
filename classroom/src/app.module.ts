import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import * as path from 'path';
import { DataModule } from './data/data.module';
import { DomainModule } from './domain/domain.module';
import { InfraModule } from './infra/infra.module';
import { MainModule } from './main/main.module';
import { PresentationModule } from './presentation/presentation.module';

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
    DomainModule,
    DataModule,
    MainModule,
    PresentationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
