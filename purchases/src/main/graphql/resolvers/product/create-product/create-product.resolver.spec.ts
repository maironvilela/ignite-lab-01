import { Test, TestingModule } from '@nestjs/testing';
import { CreateProductResolver } from './create-product.resolver';

describe('CreateProductResolver', () => {
  let resolver: CreateProductResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateProductResolver]
    }).compile();

    resolver = module.get<CreateProductResolver>(CreateProductResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
