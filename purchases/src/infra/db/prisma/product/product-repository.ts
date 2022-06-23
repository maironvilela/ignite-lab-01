import { Injectable } from '@nestjs/common';
import { AddProductDTO } from '~/data/dto';
import { AddProductProps, AddProductRepository, PrismaService } from '~/infra';

@Injectable()
export class ProductRepository implements AddProductRepository {
  constructor(private prisma: PrismaService) {}

  async add({ title, slug }: AddProductProps): Promise<AddProductDTO> {
    console.log({ title, slug });
    return { id: '1' };
    /**
    return await this.prisma.product.create({
      data: {
        title,
        slug
      }
    }); */
  }
}
