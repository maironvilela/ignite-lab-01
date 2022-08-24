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
      return await new Promise(resolve =>
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
    async generate(value: string): Promise<string> {
      return new Promise(resolve => resolve(value.replace(' ', '-')));
    }
  }

  return new SlugGenerateStub();
};

describe('AddCourseService', () => {
  it('should be able add Course', async () => {
    const { sut } = makeSut();
    const dataFaker = {
      title: 'Curso ReactJS',
    };

    jest.useFakeTimers('modern').setSystemTime(new Date());
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

  it('should be able throw exception if addCourseRepository fails ', async () => {
    const { sut, repositoryStub } = makeSut();
    const data = {
      title: 'Curso React',
    };

    jest
      .spyOn(repositoryStub, 'addCourse')
      .mockReturnValueOnce(
        new Promise((resolve, reject) => reject(new Error())),
      );

    const promise = sut.execute(data);

    await expect(promise).rejects.toThrow();
  });

  it('should be able call the function generateSlug with valid params', async () => {
    const { sut, slugGeneratorStub } = makeSut();

    const dataFaker = {
      title: 'Curso ReactJS',
    };

    const generateSpy = jest.spyOn(slugGeneratorStub, 'generate');

    await sut.execute(dataFaker);

    expect(generateSpy).toHaveBeenCalledWith('curso reactjs');
  });

  it('should be able throw exception if slug generation fails ', async () => {
    const { sut, slugGeneratorStub } = makeSut();
    const data = {
      title: 'Curso React',
    };

    jest
      .spyOn(slugGeneratorStub, 'generate')
      .mockReturnValueOnce(
        new Promise((resolve, reject) => reject(new Error())),
      );

    const promise = sut.execute(data);

    await expect(promise).rejects.toThrow();
  });
});
