import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TestResolver {
  @Query(() => String)
  //@UseGuards(AuthorizationGuard)
  async hello() {
    return 'GraphQL ';
  }
}
