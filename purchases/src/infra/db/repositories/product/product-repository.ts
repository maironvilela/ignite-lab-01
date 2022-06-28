import { ProductDTO } from '~/data/dto';
import { FindProductByTitleRepository } from '~/data/protocols/db/product/find-product-by-title';
import { ListProductsRepositoryProtocol } from '~/data/protocols/db/product/list-products-repository';
import { AddProductProps, AddProductRepository } from '~/infra';
import { PrismaService } from '../../prisma/prisma.service';

export class ProductRepository
  implements
    AddProductRepository,
    ListProductsRepositoryProtocol,
    FindProductByTitleRepository
{
  constructor(private prisma: PrismaService) {}
  async findByTitle(title: string): Promise<ProductDTO> {
    const product = await this.prisma.product.findFirst({
      where: {
        title
      }
    });

    console.log('__________________');
    console.log(product);
    console.log('__________________');

    return product;
  }

  async listProducts(): Promise<ProductDTO[]> {
    return await this.prisma.product.findMany();
  }

  async add({ title, slug }: AddProductProps): Promise<ProductDTO> {
    return await this.prisma.product.create({
      data: {
        title,
        slug
      }
    });
  }
}
