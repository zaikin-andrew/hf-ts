import { Column, Entity, Index } from 'typeorm';
import { BaseModel } from './model.base';


@Entity('ratings')
export class Rating extends BaseModel {

  @Index()
  @Column({ nullable: true })
  user: number;

  @Index()
  @Column({ nullable: true })
  candidateResponse: number;


  @Column('float', {
    nullable: true,
  })
  rating: number;

}
