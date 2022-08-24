import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { resolverGraphqlAdapter } from '~/main/adapters/resolver-graphql-adapter';
import { FindStudentByIdControllerFactory } from '~/main/factories/students/find-student-by-id-controller-factory';

type Custumer = {
  authUserId: string;
};
type Product = {
  id: string;
  title: string;
  slug: string;
};

type PurchaseCreatedPayload = {
  custumer: Custumer;
  product: Product;
};

@Controller()
export class PurchasesKafkaController {
  constructor(
    private findStudentByIdControllerFactory: FindStudentByIdControllerFactory,
  ) {}

  @EventPattern('purchases.new-purchase')
  async purchaseCreated(@Payload() message: PurchaseCreatedPayload) {
    const { custumer, product } = message;

    const findStudentByIdController =
      this.findStudentByIdControllerFactory.makeFindStudentByIdController();
    const request = {
      params: { id: custumer.authUserId },
      body: {},
    };

    const student = await resolverGraphqlAdapter(
      findStudentByIdController,
      request,
    );

    if (!student) {
      // salvar student
    }

    console.log(student);

    return student;
  }
}
