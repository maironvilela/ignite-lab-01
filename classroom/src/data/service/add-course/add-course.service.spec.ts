import { faker } from '@faker-js/faker';
import { Test, TestingModule } from '@nestjs/testing';
import { AddCourseService } from './add-course.service';

describe('AddCourseService', () => {
  let service: AddCourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddCourseService],
    }).compile();

    service = module.get<AddCourseService>(AddCourseService);
  });

  it('should be able return Course', async () => {
    const dataFaker = {
      title: faker.datatype.string(),
      slug: faker.datatype.string(),
    };

    const course = await service.execute(dataFaker);

    expect(course).toHaveProperty('id');
  });
});
