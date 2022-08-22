export type Product = {
  id: string;
  title: string;
  slug: string;
};

export type Custumer = {
  authUserId: string;
};

export type EmitMessageNewPurchaseParam = {
  custumer: Custumer;
  product: Product;
};

export interface EmitMessageNewPurchase {
  emit(data: EmitMessageNewPurchaseParam): Promise<void>;
}
