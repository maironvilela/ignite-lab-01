import {
  AddCustomerRepository,
  AddPurchaseRepository,
  FindCustomerByAuthUserIdRepository,
  FindProductByIdRepository
} from '~/data/protocols';
import { EmitMessageNewPurchase } from '~/data/protocols/messaging/emit-message-new-purchases';
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
    private addPurchaseRepository: AddPurchaseRepository,
    private emitMessageNewPurchase: EmitMessageNewPurchase
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

    await this.emitMessageNewPurchase.emit({
      custumer: {
        authUserId: customer.authUserId
      },
      product: {
        id: product.id,
        title: product.title,
        slug: product.slug
      }
    });

    return purchase;
  }
}
