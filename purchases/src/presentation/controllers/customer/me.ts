import { FindCustomerByAuthUserIdService } from '~/data/services/customer/find-by-auth-user-id';
import { ok } from '~/presentation/helpers/http-helpers';
import {
  Controller,
  HttpRequest,
  HttpResponse
} from '~/presentation/protocols';

export class MeController implements Controller {
  constructor(
    private findCustomerByAuthUserIdService: FindCustomerByAuthUserIdService
  ) {}
  async handle(request?: HttpRequest): Promise<HttpResponse<any>> {
    const { authUserId } = request.body;

    const customer =
      await this.findCustomerByAuthUserIdService.findByAuthUserId(authUserId);

    return new Promise((resolve) => resolve(ok(customer)));
  }
}
