import { ListCourseUseCase } from '~/domain/usecases';
import { Controller, HttpResponse } from '../protocols';

export class ListCoursesController implements Controller {
  constructor(private listCurseService: ListCourseUseCase) {}
  async handle(): Promise<HttpResponse<any>> {
    const courses = await this.listCurseService.execute();
    return {
      statusCode: 200,
      body: courses,
    };
  }
}
