import { Test, TestingModule } from '@nestjs/testing';
import { ProductsSalesService } from './products_sales.service';

describe('ProductsSalesService', () => {
  let service: ProductsSalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsSalesService],
    }).compile();

    service = module.get<ProductsSalesService>(ProductsSalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
