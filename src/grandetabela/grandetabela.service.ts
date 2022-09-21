import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateGrandetabelaDto } from './dto/create-grandetabela.dto';
import { UpdateGrandetabelaDto } from './dto/update-grandetabela.dto';
import { Grandetabela } from './entities/grandetabela.entity';
import { Between } from 'typeorm';
import { addYears, subYears } from 'date-fns';
// TypeORM Query Operators
export const AfterDate = (date: Date) => Between(date, addYears(date, 1000));
export const BeforeDate = (date: Date) => Between(subYears(date, 1000), date);
@Injectable()
export class GrandetabelaService {
  constructor(
    @InjectRepository(Grandetabela)
    private grandeTabelaRepository: Repository<Grandetabela>,
  ) {}
  create(createGrandetabelaDto: CreateGrandetabelaDto) {
    return 'This action adds a new grandetabela';
  }

  async findAll(): Promise<any> {
    // return `This action returns all grandetabela`;

    try {
      const date = new Date();
      // const date2 = new Date();
      // const current_date2 =
      //   date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
      return this.grandeTabelaRepository.find({
        select: ['id', 'Order_Date', 'Quantity'],
        where: [
          {
            // Order_Date: BeforeDate(new Date()),
            Order_Date: BeforeDate(date),
          },
          //take only collumn Order_Date and Quantity
          // { Order_Date: date, Quantity: 'Quantity' },
        ],
      });
    } catch (error) {
      console.log('Error on Query All data!');
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} grandetabela`;
  }

  update(id: number, updateGrandetabelaDto: UpdateGrandetabelaDto) {
    return `This action updates a #${id} grandetabela`;
  }

  remove(id: number) {
    return `This action removes a #${id} grandetabela`;
  }
}
