import { Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from '~/infra/db/prisma/prisma.service';
import { Product } from '~/main/graphql/models/product';

@Resolver()
export class ListAllProductResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Product])
  products() {
    return this.prisma.product.findMany();
  }
}
