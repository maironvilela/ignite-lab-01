import { Module } from '@nestjs/common';
import { InfraModule } from '~/infra/infra.module';
import { AddCourseControllerFactory } from './factories/add-course-controller-factory';
import { ListCourseControllerFactory } from './factories/list-course-controller-factory';
import { FindStudentByIdControllerFactory } from './factories/students/find-student-by-id-controller-factory';
import { AddCourseResolvers } from './graphql/resolvers/Course/add-course';
import { ListAllCoursesResolvers } from './graphql/resolvers/Course/list-all-courses';
import { PurchasesKafkaController } from './kafka/controllers/purchases-kafka.controller';

@Module({
  controllers: [PurchasesKafkaController],

  providers: [
    ListAllCoursesResolvers,
    ListCourseControllerFactory,
    AddCourseControllerFactory,
    AddCourseResolvers,
    FindStudentByIdControllerFactory,
  ],
  imports: [InfraModule],
})
export class MainModule {}
