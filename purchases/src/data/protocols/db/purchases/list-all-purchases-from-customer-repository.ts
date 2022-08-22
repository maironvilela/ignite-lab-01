import { PurchaseDTO } from '~/data/dto';

export interface ListAllPurchasesFromCustomerRepository {
  listAllPurchasesFromCustomer(customerId: string): Promise<PurchaseDTO[]>;
}
