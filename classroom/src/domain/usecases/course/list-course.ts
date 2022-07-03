import { Course } from '~/domain/models';

export interface ListCourseUseCase {
  execute(): Course;
}
