import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Purchases {
  @Field(() => ID)
  id: string;

  @Field()
  status: string;

  @Field()
  createdAt: Date;
}
