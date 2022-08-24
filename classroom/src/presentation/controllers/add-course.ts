import { AddCourseService } from '~/data/service/course/add-course/add-course.service';
import { internalServerError, ok } from '../helpers';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class AddCourseController implements Controller {
  constructor(private addCourseService: AddCourseService) {}
  async handle(request: HttpRequest): Promise<HttpResponse<any>> {
    try {
      const { title } = request.body;
      const course = await this.addCourseService.execute({ title });
      return ok(course);
    } catch (error) {
      console.log(error);
      return internalServerError(error);
    }
  }
}
