import { ListAllPurchasesUseCase } from '~/domain/usecases';
import { Controller, HttpResponse } from '~/presentation/protocols';
import { PurchasesViewModel } from '~/presentation/view-models/purchases';
import { internalServerError, ok } from '../../helpers/http-helpers';
import { ProductViewModel } from '../../view-models/product';

export class ListAllPurchasesController implements Controller {
  constructor(private listAllPurchasesService: ListAllPurchasesUseCase) {}
  async handle(): Promise<HttpResponse<ProductViewModel>> {
    try {
      const purchases = await this.listAllPurchasesService.execute();
      const purchasesViewModel = PurchasesViewModel.mapCollection(purchases);
      return ok(purchasesViewModel);
    } catch (error) {
      return internalServerError(error);
    }
  }
}
