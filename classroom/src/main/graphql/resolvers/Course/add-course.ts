import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { resolverGraphqlAdapter } from "~/main/adapters/resolver-graphql-adapter";
import { AddCourseControllerFactory } from "~/main/factories/add-course-controller-factory";
import { CreateCourseInput } from "../../inputs/create-course";
import { Course } from "../../models/course";

@Resolver()
export class AddCourseResolvers {
  constructor(private addCourseControllerFactory: AddCourseControllerFactory) {}
  @Mutation(() => Course)
  async createCourse(@Args("data") { title }: CreateCourseInput) {
    const request = {
      body: { title }
    };
    const controller =
      this.addCourseControllerFactory.makeListCourseController();
    return await resolverGraphqlAdapter(controller, request);
  }
}
