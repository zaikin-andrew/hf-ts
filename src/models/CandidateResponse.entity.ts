import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Job } from './Job.entity';
import { BaseModel } from './model.base';
import { Note } from './Note.entity';
import { Rating } from './Rating.entity';
import { Response } from './Response.entity';
import { Score } from './Score.entity';


@Entity('candidateResponses')
export class CandidateResponse extends BaseModel {

  @Column({ nullable: true })
  timestamp: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  email: string;

  @Column({ default: false })
  favorite: boolean;

  @ManyToOne(type => Job, d => d.candidateResponses)
  job: Promise<Job>;

  @OneToMany(type => Score, d => d.candidateResponse)
  score: Score[];

  @OneToMany(type => Response, d => d.candidateResponse)
  responses: Response[];

  @OneToMany(type => Note, d => d.candidateResponse)
  notes: Note[];

  @OneToMany(type => Rating, d => d.candidateResponse)
  ratings: Rating[];

}
