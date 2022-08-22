import { Injectable } from '@nestjs/common';
import { FindCustomerByAuthUserIdService } from '~/data/services/customer/find-by-auth-user-id';
import { PrismaService } from '~/infra/db/prisma/prisma.service';
import { CustomerPrismaRepository } from '~/infra/db/repositories/customer/customer-repository';
import { MeController } from '~/presentation/controllers/customer/me';
import { Controller } from '~/presentation/protocols';

@Injectable()
export class MeControllerFactory {
  constructor(private prisma: PrismaService) {}
  makeMeController = (): Controller => {
    const findCustomerByAuthUserIdRepository = new CustomerPrismaRepository(
      this.prisma
    );
    const findCustomerByAuthUserIdService = new FindCustomerByAuthUserIdService(
      findCustomerByAuthUserIdRepository
    );
    return new MeController(findCustomerByAuthUserIdService);
  };
}
