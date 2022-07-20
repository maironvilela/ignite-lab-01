import { ProductDTO } from '~/data/dto';
import { FindProductByIdRepository } from '~/data/protocols/db/product/find-product-by-id';
import { FindProductByTitleRepository } from '~/data/protocols/db/product/find-product-by-title';
import { ListProductsRepositoryProtocol } from '~/data/protocols/db/product/list-products-repository';
import { Product } from '~/domain/models';
import { AddProductProps, AddProductRepository } from '~/infra';
import { PrismaService } from '../../prisma/prisma.service';

export class ProductRepository
  implements
    AddProductRepository,
    ListProductsRepositoryProtocol,
    FindProductByTitleRepository,
    FindProductByIdRepository
{
  constructor(private prisma: PrismaService) {}
  async findById(id: string): Promise<Product> {
    const product = await this.prisma.product.findFirst({
      where: {
        id
      }
    });
    return product;
  }
  async findByTitle(title: string): Promise<ProductDTO> {
    const product = await this.prisma.product.findFirst({
      where: {
        title
      }
    });

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
