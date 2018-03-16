import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { CandidateResponse } from './CandidateResponse.entity';
import { BaseModel } from './model.base';
import { Option } from './Option.entity';
import { Question } from './Question.entity';


@Entity('responses')
export class Response extends BaseModel {
  @Column({ nullable: true })
  text: string;

  @ManyToOne(type => CandidateResponse, d => d.responses)
  candidateResponse: CandidateResponse;

  @OneToOne(type => Question)
  @JoinColumn()
  question: Question;


  @OneToOne(type => Option)
  @JoinColumn()
  option: Option;

}
