import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'pgadmin',
  password: 'pgpalavra',
  database: 'mydatabase',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  // entities: [User],
  synchronize: true,
  // retryAttempts: 10,
  // retryDelay: 2000,
  autoLoadEntities: true,
};
