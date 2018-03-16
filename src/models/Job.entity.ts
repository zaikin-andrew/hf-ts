import { Column, Entity, Index, ManyToOne, OneToMany } from 'typeorm';
import { CandidateResponse } from './CandidateResponse.entity';
import { Customer } from './Customer.entity';
import { BaseModel } from './model.base';
import { Question } from './Question.entity';


@Entity('jobs')
export class Job extends BaseModel {

  @Column({ nullable: true })
  name: string;

  @Column('datetime', { nullable: true })
  lastUploadCandidatesDate: Date;

  // ------ Scores ------
  @Column({ nullable: true })
  totalScore: number;


  @Column({ nullable: true })
  basicScore: number;


  @Column({ nullable: true })
  skillsScore: number;


  @Column({ nullable: true })
  culturalScore: number;

// ------ Weights ------
  @Column({ nullable: true })
  weightBasic: number;


  @Column({ nullable: true })
  weightSkills: number;


  @Column({ nullable: true })
  weightCultural: number;

// ------ Matches ------
  @Column({ nullable: true })
  matchesExcellent: number;


  @Column({ nullable: true })
  matchesGood: number;


  @Column({ nullable: true })
  matchesPoor: number;

// ------ Like/Dislike ------
  @Column({ nullable: true })
  numberFavorites: number;


  @Column({ nullable: true })
  numberRejected: number;

// ------ State ------
  @Column({ default: true })
  active: boolean;


  @Column({ default: false })
  archive: boolean;

// ------ Relation ------
  @ManyToOne(type => Customer, customer => customer.jobs)
  customer: Customer;

  @OneToMany(type => Question, question => question.job)
  questions: Promise<Question[]>;

  @OneToMany(type => CandidateResponse, cr => cr.job)
  candidateResponses: Promise<CandidateResponse[]>;

}
