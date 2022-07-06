import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dbConf } from './db.config';
import { DataModule } from './data/data.module';

@Module({
  imports: [dbConf, DataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
