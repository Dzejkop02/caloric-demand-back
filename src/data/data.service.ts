import { Injectable } from '@nestjs/common';
import { getDataResponse } from '../interfaces';
import { DataItem } from './data-item.entity';
import { UpdateDataDto } from './dto/update-data.dto';

@Injectable()
export class DataService {
  async getData(): Promise<getDataResponse> {
    return DataItem.find();
  }

  async addDayOrUpdate(dayData: UpdateDataDto): Promise<getDataResponse> {
    const { day, kcal, weight } = dayData;

    if (typeof day !== 'number' || day < 1 || day > 14) {
      throw new Error('Day must be number from 1 to 14.');
    }

    if (typeof kcal !== 'number' || kcal < 0 || kcal > 50000) {
      throw new Error('Kcal must be number from 0 to 50000.');
    }

    if (typeof weight !== 'number' || weight < 20 || weight > 300) {
      throw new Error('Weight must be number from 20 to 300.');
    }

    const foundDay = await DataItem.findOne({ where: { day } });

    if (foundDay) {
      foundDay.weight = weight;
      foundDay.kcal = kcal;

      await foundDay.save();
    } else {
      const newDay = new DataItem();

      newDay.day = day;
      newDay.weight = weight;
      newDay.kcal = kcal;

      await newDay.save();
    }

    return this.getData();
  }

  async clearData(): Promise<getDataResponse> {
    await DataItem.clear();

    return this.getData();
  }

  async deleteOne(day: number) {
    await DataItem.delete({ day });

    return this.getData();
  }
}
