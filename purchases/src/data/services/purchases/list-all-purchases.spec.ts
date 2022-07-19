import { ListAllPurchasesUseCase } from '~/domain/usecases';
import { ListAllPurchasesService } from './list-all-purchases';

type MakeSutTypes = {
  sut: ListAllPurchasesUseCase;
};

const makeSut = (): MakeSutTypes => {
  const sut = new ListAllPurchasesService();
  return { sut };
};

describe('ListAllPurchasesService', () => {
  it('should be able return purchases list', async () => {
    const { sut } = makeSut();
    const result = await sut.listAll();
    expect(result.length).toEqual(10);
  });
});
