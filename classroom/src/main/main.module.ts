import { Module } from '@nestjs/common';
import { InfraModule } from '~/infra/infra.module';
import { ListCourseControllerFactory } from './factories/list-course-controller-factory';
import { ListAllCoursesResolvers } from './graphql/resolvers/Course/list-all-courses';

@Module({
  providers: [ListAllCoursesResolvers, ListCourseControllerFactory],
  imports: [InfraModule],
})
export class MainModule {}
