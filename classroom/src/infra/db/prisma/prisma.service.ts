import {
  INestApplication,
  Injectable,
  OnModuleDestroy,
  OnModuleInit
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super();
  }

  // Função chamado ao iniciar o modulo
  async onModuleInit() {
    await this.$connect();
  }
  // Função chamada ao "destruir" o modulo
  async onModuleDestroy() {
    await this.$disconnect();
  }

  // Fecha a conexão do prisma do prisma antes de sair
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
