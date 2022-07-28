import { Test, TestingModule } from '@nestjs/testing';
import { AddPurchaseService } from './add-purchase.service';

describe('AddPurchaseService', () => {
  let service: AddPurchaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddPurchaseService],
    }).compile();

    service = module.get<AddPurchaseService>(AddPurchaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
