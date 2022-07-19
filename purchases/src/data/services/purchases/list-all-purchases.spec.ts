import { faker } from '@faker-js/faker';
import { ListAllPurchasesRepository } from '~/data/protocols';
import { Purchases } from '~/domain/models';
import { ListAllPurchasesUseCase } from '~/domain/usecases';
import { ListAllPurchasesService } from './list-all-purchases';

type MakeSutTypes = {
  sut: ListAllPurchasesUseCase;
  repositoryStub: ListAllPurchasesRepository;
};

const makeRepositoryStub = (): ListAllPurchasesRepository => {
  class ListAllPurchasesRepositoryStub implements ListAllPurchasesRepository {
    listAll(): Promise<Purchases[]> {
      const purchases: Purchases[] = [];

      for (let i = 0; i < 10; i++) {
        purchases.push({
          id: faker.datatype.uuid(),
          status: faker.datatype.string(),
          createdAt: faker.date.past(),
          updatedAt: faker.date.future()
        });
      }

      return new Promise((resolve) => resolve(purchases));
    }
  }
  return new ListAllPurchasesRepositoryStub();
};

const makeSut = (): MakeSutTypes => {
  const repositoryStub = makeRepositoryStub();
  const sut = new ListAllPurchasesService(repositoryStub);
  return { sut, repositoryStub };
};

describe('ListAllPurchasesService', () => {
  it('should be able return purchases list', async () => {
    const { sut } = makeSut();
    const result = await sut.execute();
    expect(result.length).toEqual(10);
  });

  it('Should be able call listAll function', async () => {
    const { sut, repositoryStub } = makeSut();

    const listAllSpy = jest.spyOn(repositoryStub, 'listAll');

    await sut.execute();

    expect(listAllSpy).toHaveBeenCalled();
  });

  it('Should be able throw exception if listAll function fails ', async () => {
    const { sut, repositoryStub } = makeSut();

    jest
      .spyOn(repositoryStub, 'listAll')
      .mockReturnValueOnce(
        new Promise((resolve, reject) => reject(new Error()))
      );
    const promise = sut.execute();

    await expect(promise).rejects.toThrow();
  });
});
