import { AddCourseServiceRequest, AddCourseServiceResponse } from '~/data/dto';
import { AddCourseRepository } from '~/data/protocols';
import { AddCourseUseCase } from '~/domain/usecases';

export class AddCourseService implements AddCourseUseCase {
  constructor(private repository: AddCourseRepository) {}

  async execute(
    data: AddCourseServiceRequest,
  ): Promise<AddCourseServiceResponse> {
    const course = await this.repository.addCourse(data);

    return { ...data, id: 'id', createdAt: new Date(), updatedAt: new Date() };
  }
}
