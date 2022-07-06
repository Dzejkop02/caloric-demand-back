import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { getDataResponse } from '../interfaces/data';
import { DataService } from './data.service';
import { UpdateDataDto } from './dto/update-data.dto';

@Controller('data')
export class DataController {
  constructor(@Inject(DataService) private dataService: DataService) {}

  @Get('/')
  getData(): Promise<getDataResponse> {
    return this.dataService.getData();
  }

  @Post('/')
  addDayOrUpdate(@Body() dayData: UpdateDataDto): Promise<getDataResponse> {
    return this.dataService.addDayOrUpdate(dayData);
  }
}
