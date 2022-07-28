import { PurchaseDTO } from '~/data/dto';

export type AddPurchaseParams = {
  productId: string;
  customerId: string;
};

export interface AddPurchaseRepository {
  addPurchases(data: AddPurchaseParams): Promise<PurchaseDTO>;
}
