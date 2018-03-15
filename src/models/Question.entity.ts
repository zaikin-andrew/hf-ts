import { Column, Entity, Index } from 'typeorm';
import { BaseModel } from './model.base';

export enum Categories {
  basic    = 'basic',
  skills   = 'skills',
  cultural = 'cultural',
  non      = ''
}

@Entity('questions')
export class Question extends BaseModel {

  @Column({ nullable: true })
  group: number;


  @Column({ nullable: true })
  questionIndex: number;


  @Column({ nullable: true })
  type: string;

  @Index()
  @Column({ nullable: true })
  job: number;


  @Column({ nullable: true })
  text: string;


  @Column('enum', { nullable: true, enum: Categories })
  category: string;

}
