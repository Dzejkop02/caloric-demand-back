import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { getDataResponse } from '../interfaces';
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

  @Delete('/')
  clearData(): Promise<getDataResponse> {
    return this.dataService.clearData();
  }

  @Delete('/:day')
  deleteOne(@Param('day') day: string): Promise<getDataResponse> {
    return this.dataService.deleteOne(Number(day));
  }
}
