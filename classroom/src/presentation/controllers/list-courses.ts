import { ListCourseUseCase } from '~/domain/usecases';
import { internalServerError, ok } from '../helpers';
import { Controller, HttpResponse } from '../protocols';

export class ListCoursesController implements Controller {
  constructor(private listCurseService: ListCourseUseCase) {}
  async handle(): Promise<HttpResponse<any>> {
    try {
      const courses = await this.listCurseService.execute();
      return ok(courses);
    } catch (error) {
      return internalServerError(error);
    }
  }
}
