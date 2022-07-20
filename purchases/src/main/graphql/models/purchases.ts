import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Product } from './product';

@ObjectType()
export class Purchases {
  @Field(() => ID)
  id: string;

  @Field()
  status: string;

  @Field()
  createdAt: Date;

  @Field(() => Product)
  product: Product;
  productId: string;
}
