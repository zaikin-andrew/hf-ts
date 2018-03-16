import { Column, Entity, Index, OneToMany } from 'typeorm';
import { CandidateResponse } from './CandidateResponse.entity';
import { BaseModel } from './model.base';
import { User } from './User.entity';


@Entity('notes')
export class Note extends BaseModel {

  @Column({ nullable: true })
  text: string;

  @OneToMany(type => User, d => d.notes)
  user: User;

  @OneToMany(type => CandidateResponse, d => d.notes)
  candidateResponse: CandidateResponse;

}
