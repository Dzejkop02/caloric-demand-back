import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UpdateDataDto } from './dto/update-data.dto';
import { User } from '../user/user.entity';

@Entity()
export class DataItem extends BaseEntity implements UpdateDataDto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    precision: 2,
  })
  day: number;

  @Column({
    precision: 5,
  })
  kcal: number;

  @Column({
    type: 'float',
    precision: 4,
    scale: 1,
  })
  weight: number;

  @ManyToOne((type) => User, (entity) => entity.dataItem)
  @JoinColumn()
  user: User;
}
