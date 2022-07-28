import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePurchasesInput {
  @Field()
  productId: string;
}
