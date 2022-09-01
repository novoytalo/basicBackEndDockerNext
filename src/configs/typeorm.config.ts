import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'pgadmin',
  password: 'pgpalavra',
  database: 'mydatabase',
  entities: [],
  synchronize: true,
};
