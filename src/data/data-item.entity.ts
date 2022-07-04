import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UpdateDataDto } from './dto/update-data.dto';

@Entity()
export class DataItem extends BaseEntity implements UpdateDataDto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  day: number;

  @Column()
  kcal: number;

  @Column()
  weight: number;
}
