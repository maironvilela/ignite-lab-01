import { CourseDTO } from "~/data/dto";
import {
  AddCourseRepository,
  AddCourseRepositoryRequest,
  ListCoursesRepository
} from "~/data/protocols";
import { Course } from "~/domain/models";
import { PrismaService } from "../../prisma.service";

export class CoursePrismaRepository
  implements ListCoursesRepository, AddCourseRepository
{
  constructor(private prisma: PrismaService) {}
  addCourse(data: AddCourseRepositoryRequest): Promise<Course> {
    return this.prisma.course.create({ data });
  }

  async listCourses(): Promise<CourseDTO[]> {
    return await this.prisma.course.findMany();
  }
}
