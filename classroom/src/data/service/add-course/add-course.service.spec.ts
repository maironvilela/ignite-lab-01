import {
  AddCourseRepository,
  AddCourseRepositoryRequest,
  AddCourseRepositoryResponse
} from '~/data/protocols';

import { AddCourseService } from './add-course.service';

interface MakeSutTypes {
  sut: AddCourseService;
  repository: AddCourseRepository;
}

const makeSut = (): MakeSutTypes => {
  const repository = makeAddCourseRepository();
  const sut = new AddCourseService(repository);
  return { sut, repository };
};

const makeAddCourseRepository = (): AddCourseRepository => {
  class AddCourseRepositoryStub implements AddCourseRepository {
    async addCourse(
      data: AddCourseRepositoryRequest,
    ): Promise<AddCourseRepositoryResponse> {
      return await new Promise((resolve) =>
        resolve({
          ...data,
          id: 'id',
          createdAt: new Date(),
          updatedAt: new Date(),
        }),
      );
    }
  }

  return new AddCourseRepositoryStub();
};

describe('AddCourseService', () => {
  const { sut } = makeSut();
  it('should be able return Course', async () => {
    const dataFaker = {
      title: 'Curso ReactJS',
      slug: 'curso-reactjs',
    };
    const course = await sut.execute(dataFaker);

    expect(course).toHaveProperty('id');
  });

  it('should be able call the function addCourse with valid params', async () => {
    const { sut, repository } = makeSut();
    const dataFaker = {
      title: 'Curso ReactJS',
      slug: 'curso-reactjs',
    };

    const addCourseSpy = jest.spyOn(repository, 'addCourse');

    await sut.execute(dataFaker);

    expect(addCourseSpy).toHaveBeenCalledWith({
      title: 'Curso ReactJS',
      slug: 'curso-reactjs',
    });
  });
});
