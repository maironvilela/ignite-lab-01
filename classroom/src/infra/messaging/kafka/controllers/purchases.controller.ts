import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";

type Custumer = {
  authUserId: string;
};
type Product = {
  id: string;
  title: string;
  slug: string;
};

type PurchaseCreatedPayload = {
  custumer: Custumer;
  product: Product;
};

@Controller()
export class PurchasesController {
  @EventPattern("purchases.new-purchase")
  async purchaseCreated(@Payload() message: PurchaseCreatedPayload) {
    console.log(message);
  }
}
