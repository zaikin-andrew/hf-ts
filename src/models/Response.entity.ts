import { Column, Entity, Index } from 'typeorm';
import { BaseModel } from './model.base';


@Entity('responses')
export class Response extends BaseModel {
  @Column({ nullable: true })
  text: string;

  @Index()
  @Column({ nullable: true })
  candidateResponse: number;


  @Index()
  @Column({ nullable: true })
  question: number;


  @Index()
  @Column({ nullable: true })
  option: number;

}
