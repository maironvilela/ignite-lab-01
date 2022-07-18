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

  it('should be defined', () => {
    service.addCourse();
    expect(service).toBeDefined();
  });
});
