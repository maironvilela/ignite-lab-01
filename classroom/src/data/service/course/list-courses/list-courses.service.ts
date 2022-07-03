import { ListCoursesRepository } from '~/data/protocols';
import { Course } from '~/domain/models';
import { ListCourseUseCase } from '~/domain/usecases';

export class ListCoursesService implements ListCourseUseCase {
  constructor(private listCursesRepository: ListCoursesRepository) {}

  async execute(): Promise<Course[]> {
    const courses = await this.listCursesRepository.listCourses();
    return courses;
  }
}
