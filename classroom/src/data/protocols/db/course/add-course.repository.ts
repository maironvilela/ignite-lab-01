import { Course } from '~/domain/models';

export type AddCourseRequest = {
  title: string;
  slug: string;
};

export type AddCourseResponse = Course;

export interface AddCourseRepository {
  addCourse(data: Request): Promise<AddCourseResponse>;
}
