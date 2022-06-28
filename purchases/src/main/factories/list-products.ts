import { Injectable } from '@nestjs/common';
import { ListProductsRepositoryProtocol } from '~/data/protocols/db/product/list-products-repository';
import { ListProductService } from '~/data/services/product/list-products-service';
import { ListProductsUseCase } from '~/domain/usecases/product/list-products';
import { PrismaService } from '~/infra/db/prisma/prisma.service';
import { ProductRepository } from '~/infra/db/repositories/product/product-repository';
import { ListProductsController } from '~/presentation/controllers/list-products';
import { Controller } from '~/presentation/protocols';

@Injectable()
export class ListProductControllerFactory {
  constructor(private prisma: PrismaService) {}
  makeListProductController(): Controller {
    const listProductsRepository: ListProductsRepositoryProtocol =
      new ProductRepository(this.prisma);
    const listProduct: ListProductsUseCase = new ListProductService(
      listProductsRepository
    );

    return new ListProductsController(listProduct);
  }
}
