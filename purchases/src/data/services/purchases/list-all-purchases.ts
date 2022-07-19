import { faker } from '@faker-js/faker';
import { Purchases } from '~/domain/models';
import { ListAllPurchasesUseCase } from '~/domain/usecases';

export class ListAllPurchasesService implements ListAllPurchasesUseCase {
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
