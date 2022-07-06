import { Controller, Get, Inject } from '@nestjs/common';
import { getDataResponse } from '../interfaces/data';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
  constructor(@Inject(DataService) private dataService: DataService) {}

  @Get('/')
  getData(): Promise<getDataResponse> {
    return this.dataService.getData();
  }
}
