import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './create-users.dto';
import { CreateCatDto } from 'src/cats/create-cat.dto';
import { Response } from '@nestjs/common';
import { Entity } from 'typeorm';
import { DataSource } from 'typeorm';
import { timeStamp } from 'console';
import { User } from './user.entity';
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('usingprovider')
  async findAll(): Promise<any[]> {
    return this.usersService.findAll();
  }
  @Post('usingprovider')
  async create(@Res() resp: Response, @Body() user: User) {
    this.usersService.create(user);
  }
  @Delete('usingprovider')
  async delete(@Res() resp: Response, @Body() id: number) {
    this.usersService.remove(id);
  }
  @Patch('usingprovider')
  async update(@Res() resp: Response, @Body() user: any) {
    this.usersService.update(user.id, { ...user });
  }
}
