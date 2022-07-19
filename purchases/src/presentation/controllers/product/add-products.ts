import { AddProductUseCase } from '~/domain/usecases';
import { ProductAlreadyRegisteredError } from '~/presentation/error/product-already-registered-error';
import {
  badRequest,
  internalServerError,
  ok
} from '~/presentation/helpers/http-helpers';
import {
  Controller,
  HttpRequest,
  HttpResponse
} from '~/presentation/protocols';
import { ProductViewModel } from '~/presentation/view-models';

export class AddProductController implements Controller {
  constructor(private addProduct: AddProductUseCase) {}
  async handle(request: HttpRequest): Promise<HttpResponse<ProductViewModel>> {
    try {
      const { title } = request.body;

      const product = await this.addProduct.add({ title });

      if (product === null) {
        return badRequest(new ProductAlreadyRegisteredError());
      }

      const productViewModel = ProductViewModel.map(product);
      return ok(productViewModel);
    } catch (error) {
      return internalServerError(error);
    }
  }
}
