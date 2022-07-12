import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { getDataResponse } from '../interfaces';
import { DataService } from './data.service';
import { UpdateDataDto } from './dto/update-data.dto';
import { Response } from 'express';

@Controller('data')
export class DataController {
  constructor(@Inject(DataService) private dataService: DataService) {}

  @Get('/')
  getData(): Promise<getDataResponse> {
    return this.dataService.getData();
  }

  @Post('/')
  addDayOrUpdate(
    @Body() dayData: UpdateDataDto,
    @Res() res: Response,
  ): Promise<void> {
    return this.dataService.addDayOrUpdate(dayData, res);
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
