import { PurchaseDTO } from '~/data/dto';
import { ListAllPurchasesFromCustomerRepository } from '~/data/protocols';
import { ListAllPurchasesFromCustomerUseCase } from '~/domain/usecases';

export class ListAllPurchasesFromCustomerService
  implements ListAllPurchasesFromCustomerUseCase
{
  constructor(
    private listAllPurchasesFromCustomerRepository: ListAllPurchasesFromCustomerRepository
  ) {}
  async listAllPurchasesFromCustomer(
    customerId: string
  ): Promise<PurchaseDTO[]> {
    const purchases =
      await this.listAllPurchasesFromCustomerRepository.listAllPurchasesFromCustomer(
        customerId
      );

    return purchases;
  }
}
