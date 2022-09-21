import {
  // TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

import { env } from 'process';
// const username = env.POSTGRES_USER;
// const password = env.POSTGRES_PASSWORD;
// const database = env.POSTGRES_DB;
// const host = env.POSTGRES_HOST;
// console.log('variaveis .env ' + username + ' ' + password + ' ' + database);
export const typeOrmConfig: TypeOrmModuleOptions = {
  // export const typeOrmConfig: TypeOrmModuleAsyncOptions = {
  type: 'postgres',
  port: 5432,
  host: env.POSTGRES_HOST,
  username: env.POSTGRES_USER,
  password: env.POSTGRES_PASSWORD,
  database: env.POSTGRES_DB,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
  // retryAttempts: 10,
  // retryDelay: 2000,
  autoLoadEntities: true,
};
