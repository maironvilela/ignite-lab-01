import { Course } from '~/domain/models';

export type AddCourseServiceRequest = {
  title: string;
  slug: string;
};

export type AddCourseServiceResponse = Course;
