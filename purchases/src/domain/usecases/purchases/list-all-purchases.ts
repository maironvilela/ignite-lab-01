import { Purchase } from '~/domain/models';

export interface ListAllPurchasesUseCase {
  execute(): Promise<Purchase[]>;
}
