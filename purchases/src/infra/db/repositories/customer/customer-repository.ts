import { CustomerDTO } from '~/data/dto';
import {
  AddCustomerParams,
  AddCustomerRepository,
  FindCustomerByAuthUserIdRepository,
  FindCustomerByAuthUserParams
} from '~/data/protocols';
import { PrismaService } from '../../prisma/prisma.service';

export class CustomerPrismaRepository
  implements FindCustomerByAuthUserIdRepository, AddCustomerRepository
{
  constructor(private prisma: PrismaService) {}
  async addCustomer({ authUserId }: AddCustomerParams): Promise<CustomerDTO> {
    const customer = await this.prisma.customer.create({
      data: {
        authUserId
      }
    });

    return customer;
  }

  async findCustumerByAuthUserId({
    authUserId
  }: FindCustomerByAuthUserParams): Promise<CustomerDTO> {
    const customer = await this.prisma.customer.findUnique({
      where: {
        authUserId
      }
    });
    return customer;
  }
}
