import { Course } from '~/domain/models';

export interface AddCourseUseCase {
  execute(course: Course): Promise<Course>;
}
