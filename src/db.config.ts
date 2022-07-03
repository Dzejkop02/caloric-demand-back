import { TypeOrmModule } from '@nestjs/typeorm';

export const dbConf = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'caloric_demand_calculator',
  entities: ['dist/**/**.entity{.ts,.js}'],
  bigNumberStrings: false,
  logging: true,
  synchronize: true,
});
