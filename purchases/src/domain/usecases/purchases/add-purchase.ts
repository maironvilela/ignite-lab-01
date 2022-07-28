import { Purchase } from '~/domain/models';

export type AddPurchaseParams = {
  productId: string;
  authUserId: string;
};

export type AddPurchaseResponse = Purchase;

export interface AddPurchaseUseCase {
  addPurchase(data: AddPurchaseParams): Promise<AddPurchaseResponse>;
}
