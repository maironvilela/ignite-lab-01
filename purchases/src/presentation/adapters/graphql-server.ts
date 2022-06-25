import { Controller, HttpRequest } from '~/presentation/protocols';

export const resolverAdapter = async (
  controller: Controller,
  request: HttpRequest
): Promise<any> => {
  const httpResponse = await controller.handle(request);
  return httpResponse.body;
};
