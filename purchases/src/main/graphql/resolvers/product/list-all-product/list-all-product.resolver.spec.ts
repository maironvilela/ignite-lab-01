import { Test, TestingModule } from '@nestjs/testing';
import { ListAllProductResolver } from './list-all-product.resolver';

describe('ListAllProductResolver', () => {
  let resolver: ListAllProductResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListAllProductResolver],
    }).compile();

    resolver = module.get<ListAllProductResolver>(ListAllProductResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
