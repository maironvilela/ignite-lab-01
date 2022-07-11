import { CourseDTO } from '~/data/dto';
import { ListCoursesRepository } from '~/data/protocols';
import { PrismaService } from '../../prisma.service';

export class CoursePrismaRepository implements ListCoursesRepository {
  constructor(private prisma: PrismaService) {}
  async listCourses(): Promise<CourseDTO[]> {
    return await this.prisma.course.findMany();
  }
}
