import { Purchase } from '~/domain/models';

export interface ListAllPurchasesFromCustomerUseCase {
  listAllPurchasesFromCustomer(customerId: string): Promise<Purchase[]>;
}
