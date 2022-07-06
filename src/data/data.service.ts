import { Injectable } from '@nestjs/common';
import { getDataResponse } from '../interfaces/data';
import { DataItem } from './data-item.entity';

@Injectable()
export class DataService {
  async getData(): Promise<getDataResponse> {
    return DataItem.find();
  }
}
