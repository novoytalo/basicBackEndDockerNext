import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { UsersModule } from './users/users.module';
import { CatsController } from './cats/cats.controller';
import { AdminControllerController } from './admin-controller/admin-controller.controller';
import { AccountControllerController } from './account-controller/account-controller.controller';
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule],
  controllers: [
    CatsController,
    AdminControllerController,
    AccountControllerController,
  ],
  providers: [],
})
export class AppModule {}
