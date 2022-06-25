import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'path';
import { DataModule } from './data/data.module';
import { DomainModule } from './domain/domain.module';
import { InfraModule } from './infra/infra.module';
import { MainModule } from './main/main.module';
import { PresentationModule } from './presentation/presentation.module';

@Module({
  imports: [
    InfraModule,
    DomainModule,
    DataModule,
    MainModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql')
    }),
    PresentationModule
  ]
})
export class AppModule {}
