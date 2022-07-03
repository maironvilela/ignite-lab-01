import { CourseDTO } from '~/data/dto';

export interface ListCoursesRepository {
  listCourses(): Promise<CourseDTO[]>;
}
