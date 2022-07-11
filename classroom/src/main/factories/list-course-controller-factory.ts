import { Injectable } from '@nestjs/common';
import { ListCoursesService } from '~/data/service/course/list-courses/list-courses.service';
import { PrismaService } from '~/infra/db/prisma/prisma.service';
import { CoursePrismaRepository } from '~/infra/db/prisma/repositories/course/course-prisma';
import { ListCoursesController } from '~/presentation/controllers/list-courses';
import { Controller } from '~/presentation/protocols';

@Injectable()
export class ListCourseControllerFactory {
  constructor(private prisma: PrismaService) {}

  makeListCourseController(): Controller {
    const repository = new CoursePrismaRepository(this.prisma);
    const service = new ListCoursesService(repository);
    return new ListCoursesController(service);
  }
}
