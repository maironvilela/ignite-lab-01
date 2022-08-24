import { Injectable } from '@nestjs/common';
import { FindStudentByIdService } from '~/data/service/students/find-student-by-id';
import { PrismaService } from '~/infra/db/prisma/prisma.service';
import { StudentPrismaRepository } from '~/infra/db/prisma/repositories/student/student-prisma';
import { FindStudentByIdController } from '~/presentation/controllers/students/find-student-by-id';
import { Controller } from '~/presentation/protocols';

@Injectable()
export class FindStudentByIdControllerFactory {
  constructor(private prisma: PrismaService) {}
  makeFindStudentByIdController(): Controller {
    const repository = new StudentPrismaRepository(this.prisma);
    const service = new FindStudentByIdService(repository);
    return new FindStudentByIdController(service);
  }
}
