import { Course } from '~/domain/models';

export type AddCourseServiceRequest = {
  title: string;
};

export type AddCourseServiceResponse = Course;
