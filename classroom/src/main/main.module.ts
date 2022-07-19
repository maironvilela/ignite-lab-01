import { Module } from "@nestjs/common";
import { InfraModule } from "~/infra/infra.module";
import { AddCourseControllerFactory } from "./factories/add-course-controller-factory";
import { ListCourseControllerFactory } from "./factories/list-course-controller-factory";
import { AddCourseResolvers } from "./graphql/resolvers/Course/add-course";
import { ListAllCoursesResolvers } from "./graphql/resolvers/Course/list-all-courses";

@Module({
  providers: [
    ListAllCoursesResolvers,
    ListCourseControllerFactory,
    AddCourseControllerFactory,
    AddCourseResolvers
  ],
  imports: [InfraModule]
})
export class MainModule {}
