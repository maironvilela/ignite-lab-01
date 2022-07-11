import { Query, Resolver } from '@nestjs/graphql';
import { ListCoursesService } from '~/data/service/course/list-courses/list-courses.service';
import { PrismaService } from '~/infra/db/prisma/prisma.service';
import { CoursePrismaRepository } from '~/infra/db/prisma/repositories/course/course-prisma';
import { resolverGraphqlAdapter } from '~/main/adapters/resolver-graphql-adapter';
import { ListCoursesController } from '~/presentation/controllers/list-courses';
import { Controller } from '~/presentation/protocols';
import { Course } from '../../models/course';

@Resolver()
export class ListAllCoursesResolvers {
  private controller: Controller;
  constructor(private prisma: PrismaService) {
    const repository = new CoursePrismaRepository(this.prisma);
    const cursoService = new ListCoursesService(repository);
    this.controller = new ListCoursesController(cursoService);
  }
  @Query(() => [Course])
  async courses() {
    //return await this.prisma.course.findMany();
    return resolverGraphqlAdapter(this.controller);
  }
}
