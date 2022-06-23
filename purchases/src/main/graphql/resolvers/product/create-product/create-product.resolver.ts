import { Args, Mutation, Resolver } from '@nestjs/graphql';
import slugify from 'slugify';
import { ProductRepository } from '~/infra/db/prisma/product/product-repository';
import { CreateProductInput } from '~/main/graphql/inputs/CreateProductInput';
import { Product } from '~/main/graphql/models/product';

@Resolver()
export class CreateProductResolver {
  constructor(private productRepository: ProductRepository) {}

  @Mutation(() => Product)
  async createProduct(@Args('data') { title }: CreateProductInput) {
    const slug = slugify(title, { lower: true });
    return this.productRepository.add({ title, slug });
  }
}
