import { Purchases } from '~/domain/models';

export interface ListAllPurchasesUseCase {
  listAll(): Promise<Purchases[]>;
}
