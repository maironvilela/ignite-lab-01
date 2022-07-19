import { ListAllPurchasesResponse } from '~/data/dto';

export interface ListAllPurchasesRepository {
  listAll(): Promise<ListAllPurchasesResponse[]>;
}
