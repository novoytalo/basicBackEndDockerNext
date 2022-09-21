import { Test, TestingModule } from '@nestjs/testing';
import { ProductsSalesController } from './products_sales.controller';
import { ProductsSalesService } from './products_sales.service';

describe('ProductsSalesController', () => {
  let controller: ProductsSalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsSalesController],
      providers: [ProductsSalesService],
    }).compile();

    controller = module.get<ProductsSalesController>(ProductsSalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
