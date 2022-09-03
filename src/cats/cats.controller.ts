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
import { CreateCatDto } from './create-cat.dto';
@Controller('cats')
export class CatsController {
  @Post()
  async createdto(@Body() CreateCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }
  @Get('asyncfunction')
  async findAll2(): Promise<any> {
    return [];
  }
  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action return a #${params.id} cat`;
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
  @Get('sub')
  findAll(@Req() request: Request): string {
    return 'This controller make a retur off cats';
  }
}
