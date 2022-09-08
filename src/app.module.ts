import { Injectable, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { UsersModule } from './users/users.module';
import { CatsController } from './cats/cats.controller';
import { AdminControllerController } from './admin-controller/admin-controller.controller';
import { AccountControllerController } from './account-controller/account-controller.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { DataSource } from 'typeorm';
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule, CatsModule],
  controllers: [
    // CatsController,
    AdminControllerController,
    AccountControllerController,
  ],
  providers: [
    // CatsService
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
