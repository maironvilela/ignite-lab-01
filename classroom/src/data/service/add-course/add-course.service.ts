import { AddCourseServiceRequest, AddCourseServiceResponse } from '~/data/dto';
import { AddCourseUseCase } from '~/domain/usecases';

export class AddCourseService implements AddCourseUseCase {
  async execute(
    data: AddCourseServiceRequest,
  ): Promise<AddCourseServiceResponse> {
    return { ...data, id: 'id', createdAt: new Date(), updatedAt: new Date() };
  }
}
