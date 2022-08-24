import { FindStudentByIdUseCase } from '~/domain/usecases/student/find-student-by-id';
import { ok } from '~/presentation/helpers';
import {
  Controller,
  HttpRequest,
  HttpResponse
} from '~/presentation/protocols';

export class FindStudentByIdController implements Controller {
  constructor(private findStudentByIdService: FindStudentByIdUseCase) {}
  async handle(request?: HttpRequest): Promise<HttpResponse<any>> {
    const id = request.params.id;
    const student = await this.findStudentByIdService.execute(id);
    console.log(student);
    return ok(student);
  }
}
