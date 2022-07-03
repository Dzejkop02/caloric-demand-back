import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dbConf } from './db.config';

@Module({
  imports: [dbConf],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
