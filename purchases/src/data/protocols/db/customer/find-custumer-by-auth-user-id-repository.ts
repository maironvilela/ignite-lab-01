import { CustomerDTO } from '~/data/dto';

export type FindCustomerByAuthUserParams = {
  authUserId: string;
};

export interface FindCustomerByAuthUserIdRepository {
  findCustumerByAuthUserId(
    data: FindCustomerByAuthUserParams
  ): Promise<CustomerDTO>;
}
