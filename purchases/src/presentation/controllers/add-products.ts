import { Injectable } from '@nestjs/common';
import { AddProductService } from '~/data/services';
import {
  Controller,
  HttpRequest,
  HttpResponse
} from '~/presentation/protocols';
import { internalServerError, ok } from '../helpers/http-helpers';
import { ProductViewModel } from '../view-models/product';

@Injectable()
export class AddProductController implements Controller {
  constructor(private addProduct: AddProductService) {}
  async handle(request: HttpRequest): Promise<HttpResponse<ProductViewModel>> {
    try {
      const { title } = request.body;

      const product = await this.addProduct.add({ title });
      const productViewModel = ProductViewModel.map(product);
      return ok(productViewModel);
    } catch (error) {
      return internalServerError(error);
    }
  }
}
