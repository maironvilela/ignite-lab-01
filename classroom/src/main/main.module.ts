import { Module } from '@nestjs/common';
import { InfraModule } from '~/infra/infra.module';
import { ListAllCoursesResolvers } from './graphql/resolvers/Course/list-all-courses';

@Module({
  providers: [ListAllCoursesResolvers],
  imports: [InfraModule],
})
export class MainModule {}
