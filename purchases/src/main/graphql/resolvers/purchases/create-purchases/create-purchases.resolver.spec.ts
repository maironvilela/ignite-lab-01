import { Test, TestingModule } from '@nestjs/testing';
import { CreatePurchasesResolver } from './create-purchases.resolver';

describe('CreatePurchasesResolver', () => {
  let resolver: CreatePurchasesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreatePurchasesResolver]
    }).compile();

    resolver = module.get<CreatePurchasesResolver>(CreatePurchasesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
