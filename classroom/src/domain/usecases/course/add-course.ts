import { Course } from '~/domain/models';

export type AddCourseUseCaseRequest = {
  title: string;
  slug: string;
};

export type AddCourseUseCaseResponse = Course;

export interface AddCourseUseCase {
  execute(data: AddCourseUseCaseRequest): Promise<AddCourseUseCaseResponse>;
}
