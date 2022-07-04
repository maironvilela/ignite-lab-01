import { faker } from '@faker-js/faker';
import { ListCoursesRepository } from '~/data/protocols';
import { Course } from '~/domain/models';
import { ListCoursesService } from './list-courses.service';

interface MakeSutTypes {
  sut: ListCoursesService;
  listCoursesRepositoryStub: ListCoursesRepository;
}

const makeListCoursesRepositoryStub = (): ListCoursesRepository => {
  class ListCoursesRepositoryStub implements ListCoursesRepository {
    async listCourses(): Promise<Course[]> {
      return await new Promise((resolve) => resolve(null));
    }
  }

  return new ListCoursesRepositoryStub();
};

const makeSut = (): MakeSutTypes => {
  const listCoursesRepositoryStub = makeListCoursesRepositoryStub();
  const sut = new ListCoursesService(listCoursesRepositoryStub);
  return { sut, listCoursesRepositoryStub };
};

describe('ListCoursesService', () => {
  it('should call the function listCourses', async () => {
    const { sut, listCoursesRepositoryStub } = makeSut();

    const hashSpy = jest.spyOn(listCoursesRepositoryStub, 'listCourses');

    await sut.execute();

    expect(hashSpy).toHaveBeenCalled();
  });

  it('should return all courses', async () => {
    const result = [
      {
        id: faker.datatype.uuid(),
        title: faker.lorem.lines(),
        slug: faker.lorem.lines(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const { sut, listCoursesRepositoryStub } = makeSut();
    const response = await sut.execute();

    jest
      .spyOn(listCoursesRepositoryStub, 'listCourses')
      .mockReturnValueOnce(new Promise((resolve) => resolve(result)));

    expect(response).toBe(0);
  });
});
