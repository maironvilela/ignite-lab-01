import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class ListAllProductResolver {
  // constructor(private prisma: PrismaService) {}

  @Query(() => String)
  products() {
    return 'this.prisma.product.findMany();';
  }
}
