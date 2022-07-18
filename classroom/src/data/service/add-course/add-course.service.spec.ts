import {
  AddCourseRepository,
  AddCourseRepositoryRequest,
  AddCourseRepositoryResponse,
  SlugGenerator
} from '~/data/protocols';

import { AddCourseService } from './add-course.service';

interface MakeSutTypes {
  sut: AddCourseService;
  repositoryStub: AddCourseRepository;
  slugGeneratorStub: SlugGenerator;
}

const makeSut = (): MakeSutTypes => {
  const repositoryStub = makeAddCourseRepository();
  const slugGeneratorStub = makeSlugGenerateStub();
  const sut = new AddCourseService(repositoryStub, slugGeneratorStub);
  return { sut, repositoryStub, slugGeneratorStub };
};
const makeAddCourseRepository = (): AddCourseRepository => {
  class AddCourseRepositoryStub implements AddCourseRepository {
    async addCourse(
      data: AddCourseRepositoryRequest,
    ): Promise<AddCourseRepositoryResponse> {
      return await new Promise((resolve) =>
        resolve({
          ...data,
          id: 'valid_id',
          createdAt: new Date(),
          updatedAt: new Date(),
        }),
      );
    }
  }

  return new AddCourseRepositoryStub();
};
const makeSlugGenerateStub = (): SlugGenerator => {
  class SlugGenerateStub implements SlugGenerator {
    generate(value: string): string {
      return value.replace(' ', '-');
    }
  }
  return new SlugGenerateStub();
};

describe('AddCourseService', () => {
  it('should be able return Course', async () => {
    const { sut } = makeSut();

    const dataFaker = {
      title: 'Curso ReactJS',
    };

    jest.useFakeTimers('modern').setSystemTime(new Date(2022, 10, 1));

    const course = await sut.execute(dataFaker);

    expect(course).toEqual({
      id: 'valid_id',
      title: 'Curso ReactJS',
      slug: 'curso-reactjs',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  });

  it('should be able call the function addCourse with valid params', async () => {
    const { sut, repositoryStub } = makeSut();
    const dataFaker = {
      title: 'Curso ReactJS',
    };

    const addCourseSpy = jest.spyOn(repositoryStub, 'addCourse');

    await sut.execute(dataFaker);

    expect(addCourseSpy).toHaveBeenCalledWith({
      title: 'Curso ReactJS',
      slug: 'curso-reactjs',
    });
  });

  it('should be able call the function generate with valid params', async () => {
    const { sut, slugGeneratorStub } = makeSut();
    const dataFaker = {
      title: 'Curso ReactJS',
    };

    const generateSpy = jest.spyOn(slugGeneratorStub, 'generate');

    await sut.execute(dataFaker);

    expect(generateSpy).toHaveBeenCalledWith('curso reactjs');
  });
});
