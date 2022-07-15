import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DataItem } from '../data/data-item.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 64,
  })
  username: string;

  @Column()
  pwdHash: string;

  @Column({
    nullable: true,
    default: null,
  })
  currentTokenId: string | null;

  @OneToMany((type) => DataItem, (entity) => entity.user)
  dataItem: DataItem[];
}
