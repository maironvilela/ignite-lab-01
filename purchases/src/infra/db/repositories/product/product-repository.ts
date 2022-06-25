import { AddProductDTO } from '~/data/dto';
import { AddProductProps, AddProductRepository } from '~/infra';
import { PrismaService } from '../../prisma/prisma.service';

export class ProductRepository implements AddProductRepository {
  constructor(private prisma: PrismaService) {}

  async add({ title, slug }: AddProductProps): Promise<AddProductDTO> {
    return await this.prisma.product.create({
      data: {
        title,
        slug
      }
    });
  }
}
