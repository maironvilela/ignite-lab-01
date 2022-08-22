import { FindCustomerByAuthUserIdRepository } from '~/data/protocols';
import { Customer } from '~/domain/models';

export class FindCustomerByAuthUserIdService {
  constructor(
    private findCustomerByAuthUserIdRepository: FindCustomerByAuthUserIdRepository
  ) {}

  async findByAuthUserId(authUserId: string): Promise<Customer> {
    const customer =
      await this.findCustomerByAuthUserIdRepository.findCustumerByAuthUserId({
        authUserId
      });
    return customer;
  }
}
