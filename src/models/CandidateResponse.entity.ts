import { Column, Entity } from 'typeorm';
import { BaseModel } from './model.base';


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


  @Column({ nullable:true })
  job: number;

}
