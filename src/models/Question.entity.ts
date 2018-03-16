import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Job } from './Job.entity';
import { BaseModel } from './model.base';
import { Option } from './Option.entity';

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

  @Column({ nullable: true })
  text: string;


  @Column('enum', { nullable: true, enum: Categories })
  category: string;

  @ManyToOne(type => Job, d => d.questions)
  job: Promise<Job>;

  @OneToMany(type => Option, d => d.question)
  options: Option[];
}
