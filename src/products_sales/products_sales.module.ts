import { Module } from '@nestjs/common';
import { ProductsSalesService } from './products_sales.service';
import { ProductsSalesController } from './products_sales.controller';

@Module({
  controllers: [ProductsSalesController],
  providers: [ProductsSalesService]
})
export class ProductsSalesModule {}
