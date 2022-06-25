export type HttpResponse<T = any> = {
  statusCode: number;
  body: T;
};
export interface HttpRequest {
  body?: any;
  headers?: any;
}
