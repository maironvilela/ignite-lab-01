import {
  EmitMessageNewPurchase,
  EmitMessageNewPurchaseParam
} from '~/data/protocols/messaging/emit-message-new-purchases';
import { KafkaService } from '~/infra/messaging/kafka/config/kafka.service';

export class KafkaEmitNewPurchases implements EmitMessageNewPurchase {
  constructor(private kafka: KafkaService) {}
  async emit({
    custumer,
    product
  }: EmitMessageNewPurchaseParam): Promise<void> {
    this.kafka.emit('purchases.new-purchase', {
      custumer,
      product
    });
  }
}
