import { Column, Entity } from 'typeorm';
import { BaseModel } from './model.base';


@Entity('options')
export class Option extends BaseModel {

  @Column({ nullable: true })
  text: string;


  @Column({ nullable: true })
  index: number;


  @Column({ nullable: true })
  score: number;


  @Column({ nullable: true })
  question: number;

}
