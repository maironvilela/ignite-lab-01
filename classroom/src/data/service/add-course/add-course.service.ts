import { AddCourseServiceRequest, AddCourseServiceResponse } from '~/data/dto';
import { AddCourseRepository, SlugGenerator } from '~/data/protocols';
import { AddCourseUseCase } from '~/domain/usecases';

export class AddCourseService implements AddCourseUseCase {
  constructor(
    private repository: AddCourseRepository,
    private slugGenerator: SlugGenerator,
  ) {}

  async execute({
    title,
  }: AddCourseServiceRequest): Promise<AddCourseServiceResponse> {
    const slug = this.slugGenerator.generate(title.toLowerCase());
    const course = await this.repository.addCourse({ title, slug });
    return course;
  }
}
