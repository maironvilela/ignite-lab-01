import {
  AddCustomerRepository,
  AddPurchaseRepository,
  FindCustomerByAuthUserIdRepository,
  FindProductByIdRepository
} from '~/data/protocols';
import {
  AddPurchaseParams,
  AddPurchaseResponse,
  AddPurchaseUseCase
} from '~/domain/usecases';

export class AddPurchaseService implements AddPurchaseUseCase {
  constructor(
    private findCustumerByAuthUserIdRepository: FindCustomerByAuthUserIdRepository,
    private addCustumerRepository: AddCustomerRepository,
    private findProductByIdRepository: FindProductByIdRepository,
    private addPurchaseRepository: AddPurchaseRepository
  ) {}

  async addPurchase({
    productId,
    authUserId
  }: AddPurchaseParams): Promise<AddPurchaseResponse> {
    let customer = null;
    customer =
      await this.findCustumerByAuthUserIdRepository.findCustumerByAuthUserId({
        authUserId
      });

    if (!customer) {
      customer = await this.addCustumerRepository.addCustomer({ authUserId });
    }

    const product = await this.findProductByIdRepository.findById(productId);

    if (!product) {
      throw new Error('Product not found');
    }

    const purchase = await this.addPurchaseRepository.addPurchases({
      customerId: customer.id,
      productId
    });

    console.log('Verificando product', purchase);

    return purchase;
  }
}
