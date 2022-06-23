import { Module } from '@nestjs/common';
import { DataModule } from './data/data.module';
import { DomainModule } from './domain/domain.module';
import { InfraModule } from './infra/infra.module';
import { MainModule } from './main/main.module';

@Module({
  imports: [InfraModule, DomainModule, DataModule, MainModule],
  controllers: [],
  providers: []
})
export class AppModule {}
