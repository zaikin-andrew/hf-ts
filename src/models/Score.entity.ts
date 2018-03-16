import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { CandidateResponse } from './CandidateResponse.entity';
import { BaseModel } from './model.base';


@Entity('scores')
export class Score extends BaseModel {

  @Column({ nullable: true })
  totalScore: number;


  @Column({ nullable: true })
  basicScore: number;


  @Column({ nullable: true })
  skillsScore: number;


  @Column({ nullable: true })
  culturalScore: number;


  @Column({ nullable: true })
  totalPercent: number;


  @Column('float', {
    nullable: true,
  })
  basicPercent: number;


  @Column('float', {
    nullable: true,
  })
  skillsPercent: number;


  @Column('float', {
    nullable: true,
  })
  culturalPercent: number;

  @OneToOne(type => CandidateResponse)
  @JoinColumn()
  candidateResponse: CandidateResponse;

}
