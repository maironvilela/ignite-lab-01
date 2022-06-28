export class ProductAlreadyRegisteredError extends Error {
  constructor() {
    super('Product provided is already registered');
    this.name = 'ProductAlreadyRegisteredError';
  }
}
