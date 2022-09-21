import { Injectable } from '@nestjs/common';
import { CreateProductsSaleDto } from './dto/create-products_sale.dto';
import { UpdateProductsSaleDto } from './dto/update-products_sale.dto';

@Injectable()
export class ProductsSalesService {
  create(createProductsSaleDto: CreateProductsSaleDto) {
    return 'This action adds a new productsSale';
  }

  findAll() {
    return `This action returns all productsSales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productsSale`;
  }

  update(id: number, updateProductsSaleDto: UpdateProductsSaleDto) {
    return `This action updates a #${id} productsSale`;
  }

  remove(id: number) {
    return `This action removes a #${id} productsSale`;
  }
}
