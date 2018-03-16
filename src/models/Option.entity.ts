import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from './model.base';
import { Question } from './Question.entity';


@Entity('options')
export class Option extends BaseModel {

  @Column({ nullable: true })
  text: string;


  @Column({ nullable: true })
  index: number;


  @Column({ nullable: true })
  score: number;


  @ManyToOne(type => Question, d => d.options)
  question: Question;

}
