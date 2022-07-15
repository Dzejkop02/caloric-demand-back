import { Injectable } from '@nestjs/common';
import { getDataResponse } from '../interfaces';
import { DataItem } from './data-item.entity';
import { UpdateDataDto } from './dto/update-data.dto';
import { sortData } from '../utils/sort-data';
import { Response } from 'express';
import { User } from '../user/user.entity';

@Injectable()
export class DataService {
  async getData(user: User): Promise<getDataResponse> {
    const data = await DataItem.find({
      where: {
        user: {
          id: user.id,
        },
      },
    });

    return sortData(data);
  }

  async addDayOrUpdate(
    day: number,
    dayData: UpdateDataDto,
    res: Response,
    user: User,
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

    const foundDay = await DataItem.findOne({
      where: {
        day,
        user: {
          id: user.id,
        },
      },
    });

    if (foundDay) {
      foundDay.weight = weight;
      foundDay.kcal = kcal;

      await foundDay.save();
    } else {
      const newDay = new DataItem();

      newDay.day = day;
      newDay.weight = weight;
      newDay.kcal = kcal;
      newDay.user = user;

      await newDay.save();
    }

    res.json(await this.getData(user));
  }

  async clearData(user: User): Promise<getDataResponse> {
    await DataItem.delete({
      user: { id: user.id },
    });

    return this.getData(user);
  }

  async deleteOne(day: number, user: User) {
    await DataItem.delete({
      day,
      user: {
        id: user.id,
      },
    });

    return this.getData(user);
  }
}
