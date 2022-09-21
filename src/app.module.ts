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
import { GrandetabelaModule } from './grandetabela/grandetabela.module';
import { ProductsModule } from './products/products.module';
import { ProductsSalesModule } from './products_sales/products_sales.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule, CatsModule, GrandetabelaModule, ProductsModule, ProductsSalesModule],
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
