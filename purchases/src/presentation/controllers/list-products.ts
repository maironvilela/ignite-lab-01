import { ListProductsUseCase } from '~/domain/usecases/product/list-products';
import {
  Controller,
  HttpRequest,
  HttpResponse
} from '~/presentation/protocols';
import { internalServerError, ok } from '../helpers/http-helpers';
import { ProductViewModel } from '../view-models/product';

export class ListProductsController implements Controller {
  constructor(private listProduct: ListProductsUseCase) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async handle(request: HttpRequest): Promise<HttpResponse<ProductViewModel>> {
    try {
      const products = await this.listProduct.listProducts();
      const productViewModel = ProductViewModel.mapCollection(products);
      return ok(productViewModel);
    } catch (error) {
      return internalServerError(error);
    }
  }
}
