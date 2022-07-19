import { Injectable } from '@nestjs/common';
import { AddProductService } from '~/data/services';
import { AddProductUseCase } from '~/domain/usecases';
import { PrismaService } from '~/infra/db/prisma/prisma.service';
import { ProductRepository } from '~/infra/db/repositories/product/product-repository';
import { AddProductController } from '~/presentation/controllers';
import { Controller } from '~/presentation/protocols';
@Injectable()
export class AddProductControllerFactory {
  constructor(private prisma: PrismaService) {}
  makeAddProductController(): Controller {
    const productRepository = new ProductRepository(this.prisma);
    const addProductService: AddProductUseCase = new AddProductService(
      productRepository,
      productRepository
    );
    return new AddProductController(addProductService);
  }
}
