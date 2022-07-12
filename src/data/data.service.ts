import { Injectable } from '@nestjs/common';
import { getDataResponse } from '../interfaces';
import { DataItem } from './data-item.entity';
import { UpdateDataDto } from './dto/update-data.dto';
import { sortData } from '../utils/sort-data';
import { Response } from 'express';

@Injectable()
export class DataService {
  async getData(): Promise<getDataResponse> {
    return sortData(await DataItem.find());
  }

  async addDayOrUpdate(
    day: number,
    dayData: UpdateDataDto,
    res: Response,
  ): Promise<void> {
    const { kcal, weight } = dayData;

    if (typeof day !== 'number' || day < 1 || day > 14) {
      res.status(400).json({
        ok: false,
        message: 'Day must be number from 1 to 14.',
      });
      return;
    }

    if (typeof kcal !== 'number' || kcal < 0 || kcal > 50000) {
      res.status(400).json({
        ok: false,
        message: 'Kcal must be number from 0 to 50000.',
      });
      return;
    }

    if (typeof weight !== 'number' || weight < 20 || weight > 300) {
      res.status(400).json({
        ok: false,
        message: 'Weight must be number from 20 to 300.',
      });
      return;
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

    res.json(await this.getData());
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
