import { Purchases } from '~/domain/models';

export interface ListAllPurchasesUseCase {
  execute(): Promise<Purchases[]>;
}
