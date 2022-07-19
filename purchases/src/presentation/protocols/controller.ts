import { HttpRequest, HttpResponse } from '~/presentation/protocols';

export interface Controller {
  handle(request?: HttpRequest): Promise<HttpResponse>;
}
