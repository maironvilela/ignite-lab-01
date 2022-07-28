import { AddPurchaseUseCase } from '~/domain/usecases/purchases/add-purchase';
import { ok } from '~/presentation/helpers/http-helpers';
import {
  Controller,
  HttpRequest,
  HttpResponse
} from '~/presentation/protocols';

export class AddPurchaseController implements Controller {
  constructor(private addPurchaseService: AddPurchaseUseCase) {}
  async handle(request?: HttpRequest): Promise<HttpResponse<any>> {
    const { productId, authUserId } = request.body;

    const purchase = this.addPurchaseService.addPurchase({
      authUserId,
      productId
    });

    return ok(purchase);
  }
}
