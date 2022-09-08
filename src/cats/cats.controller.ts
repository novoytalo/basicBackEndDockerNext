// using the documentation of nestjs
import {
  Controller,
  Get,
  Req,
  Post,
  HttpCode,
  Redirect,
  Query,
  Param,
  Body,
} from '@nestjs/common';
import { Request } from 'express';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';
import { Cat } from './interfaces/cat.interface';
@Controller('cats')
export class CatsController {
  //using constructor to use cat service
  constructor(private catService: CatsService) {}
  @Post()
  async createdto(@Body() CreateCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }
  @Get('asyncfunction')
  async findAll2(): Promise<any> {
    return [];
  }
  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
  @Post()
  //@HttpCode(204)
  create(): string {
    return 'This action adds a new cat';
  }
  @Post('usingprovider')
  async createProvider(@Body() CreateCatDto: CreateCatDto) {
    this.catService.create(CreateCatDto);
  }
  @Get('sub')
  findAllProvider(@Req() request: Request): string {
    return 'This controller make a retur off cats';
  }
  @Get('usingprovider')
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }
  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action return a #${params.id} cat`;
  }
}
