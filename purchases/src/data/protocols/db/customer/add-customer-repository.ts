import { CustomerDTO } from '~/data/dto';

export type AddCustomerParams = {
  authUserId: string;
};

export interface AddCustomerRepository {
  addCustomer(data: AddCustomerParams): Promise<CustomerDTO>;
}
