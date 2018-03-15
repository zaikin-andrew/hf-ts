import { Column, Entity, Index } from 'typeorm';
import { BaseModel } from './model.base';


@Entity('notes')
export class Note extends BaseModel {

  @Column({ nullable: true })
  text: string;


  @Column({ nullable: true })
  candidateResponse: string;

  @Index()
  @Column({ nullable: true })
  user: number;

}
