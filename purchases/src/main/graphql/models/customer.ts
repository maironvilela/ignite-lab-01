import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Purchases } from './purchases';

@ObjectType()
export class Customer {
  @Field(() => ID)
  id: string;

  @Field(() => [Purchases])
  purchases: Purchases[];
}
