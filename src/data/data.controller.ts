import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { getDataResponse } from '../interfaces';
import { DataService } from './data.service';
import { UpdateDataDto } from './dto/update-data.dto';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { UserObj } from '../decorators/user-obj.decorator';
import { User } from '../user/user.entity';

@Controller('data')
export class DataController {
  constructor(@Inject(DataService) private dataService: DataService) {}

  @Get('/')
  @UseGuards(AuthGuard('jwt'))
  getData(@UserObj() user: User): Promise<getDataResponse> {
    return this.dataService.getData(user);
  }

  @Post('/:day')
  @UseGuards(AuthGuard('jwt'))
  addDayOrUpdate(
    @Body() dayData: UpdateDataDto,
    @Res() res: Response,
    @Param('day') day: string,
    @UserObj() user: User,
  ): Promise<void> {
    return this.dataService.addDayOrUpdate(Number(day), dayData, res, user);
  }

  @Delete('/')
  @UseGuards(AuthGuard('jwt'))
  clearData(@UserObj() user: User): Promise<getDataResponse> {
    return this.dataService.clearData(user);
  }

  @Delete('/:day')
  @UseGuards(AuthGuard('jwt'))
  deleteOne(
    @Param('day') day: string,
    @UserObj() user: User,
  ): Promise<getDataResponse> {
    return this.dataService.deleteOne(Number(day), user);
  }
}
