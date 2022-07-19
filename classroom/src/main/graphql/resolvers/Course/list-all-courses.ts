import { Query, Resolver } from "@nestjs/graphql";
import { resolverGraphqlAdapter } from "~/main/adapters/resolver-graphql-adapter";
import { ListCourseControllerFactory } from "~/main/factories/list-course-controller-factory";
import { Course } from "../../models/course";

@Resolver()
export class ListAllCoursesResolvers {
  constructor(
    private listCourseControllerFactory: ListCourseControllerFactory
  ) {}
  @Query(() => [Course])
  async courses() {
    const controller =
      this.listCourseControllerFactory.makeListCourseController();
    return resolverGraphqlAdapter(controller);
  }
}
