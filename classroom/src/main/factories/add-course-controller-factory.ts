import { Injectable } from '@nestjs/common';
import { AddCourseService } from '~/data/service/course/add-course/add-course.service';
import { PrismaService } from '~/infra/db/prisma/prisma.service';
import { CoursePrismaRepository } from '~/infra/db/prisma/repositories/course/course-prisma';
import { SlugGenerateImp } from '~/infra/slug/slug-generate-imp';
import { AddCourseController } from '~/presentation/controllers/add-course';
import { Controller } from '~/presentation/protocols';

@Injectable()
export class AddCourseControllerFactory {
  constructor(private prisma: PrismaService) {}

  makeListCourseController(): Controller {
    const repository = new CoursePrismaRepository(this.prisma);
    const slugGenerate = new SlugGenerateImp();
    const addCourseService = new AddCourseService(repository, slugGenerate);
    return new AddCourseController(addCourseService);
  }
}
