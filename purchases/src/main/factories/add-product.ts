import { Injectable } from '@nestjs/common';
import { AddProductService } from '~/data/services';
import { AddProductUseCase } from '~/domain/usecases';
import { PrismaService } from '~/infra/db/prisma/prisma.service';
import { ProductRepository } from '~/infra/db/repositories/product/product-repository';
import { AddProductController } from '~/presentation/controllers/add-products';
import { Controller } from '~/presentation/protocols';
@Injectable()
export class AddProductControllerFactory {
  constructor(private prisma: PrismaService) {}
  makeAddProductController(): Controller {
    const addProductRepository = new ProductRepository(this.prisma);
    const addProductService: AddProductUseCase = new AddProductService(
      addProductRepository
    );
    return new AddProductController(addProductService);
  }
}
