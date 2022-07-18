import { Course } from '~/domain/models';

export type AddCourseRepositoryRequest = {
  title: string;
  slug: string;
};

export type AddCourseRepositoryResponse = Course;

export interface AddCourseRepository {
  addCourse(
    data: AddCourseRepositoryRequest,
  ): Promise<AddCourseRepositoryResponse>;
}
