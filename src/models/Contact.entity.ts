import { Column, Entity, Index } from 'typeorm';
import { BaseModel } from './model.base';


@Entity('contacts')
export class Contact extends BaseModel {

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  website: string;

  @Index()
  @Column({ nullable: true, unique: true })
  customer: number;

}
