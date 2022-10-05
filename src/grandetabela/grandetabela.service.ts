import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateGrandetabelaDto } from './dto/create-grandetabela.dto';
import { UpdateGrandetabelaDto } from './dto/update-grandetabela.dto';
import { Grandetabela } from './entities/grandetabela.entity';
import { Between } from 'typeorm';
import { addYears, subYears } from 'date-fns';
// TypeORM Query Operators
export const AfterDate = (date: Date) => Between(date, addYears(date, 10));
export const BeforeDate = (date: Date) => Between(subYears(date, 10), date);
export const idInteval = (id: number, id2: number) => Between(id, id2);
export const dateInteval = (date1: Date, date2: Date) => Between(date1, date2);
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
      // console.log(new Date());
      // const date = new Date('2022/10/03');
      // console.log(date);
      // const date2 = new Date();
      // const current_date2 =
      //   date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
      return this.grandeTabelaRepository.find({
        select: ['id', 'Order_Date', 'Quantity'],
        where: [
          {
            // Order_Date: BeforeDate(new Date()),
            Order_Date: BeforeDate(new Date()),
          },
          //take only collumn Order_Date and Quantity
          // { Order_Date: date, Quantity: 'Quantity' },
        ],
      });
    } catch (error) {
      console.log('Error on Query All data!');
    }
  }
  async findAllid(interval_id_start, interval_id_end): Promise<any> {
    // return `This action returns all grandetabela`;

    try {
      return this.grandeTabelaRepository.find({
        select: ['id', 'Order_Date', 'Quantity'],
        where: [
          {
            id: idInteval(interval_id_start, interval_id_end),
          },
        ],
      });
    } catch (error) {
      console.log('Error on Query All data!');
    }
  }
  //search by time??
  async findAllDate(interval_date_start, interval_date_end): Promise<any> {
    // return `This action returns all grandetabela`;

    try {
      return this.grandeTabelaRepository.find({
        select: ['id', 'Order_Date', 'Quantity'],
        where: [
          {
            Order_Date: dateInteval(interval_date_start, interval_date_end),
          },
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
