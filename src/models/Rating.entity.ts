import { Column, Entity, ManyToOne } from 'typeorm';
import { CandidateResponse } from './CandidateResponse.entity';
import { BaseModel } from './model.base';
import { User } from './User.entity';


@Entity('ratings')
export class Rating extends BaseModel {

  @ManyToOne(type => CandidateResponse, d => d.ratings)
  candidateResponse: CandidateResponse;

  @ManyToOne(type => User, d => d.ratings)
  user: User;

  @Column('float', {
    nullable: true,
  })
  rating: number;

}
