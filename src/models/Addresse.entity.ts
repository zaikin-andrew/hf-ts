import { Column, Entity, Index, } from 'typeorm';
import { BaseModel } from './model.base';


@Entity('addresses')
export class Address extends BaseModel {

  @Column({ nullable: true })
  streetAddress: string;


  @Column({ nullable: true })
  city: string;


  @Column({ nullable: true })
  state: string;


  @Column({ nullable: true })
  postCode: string;

  @Index()
  @Column({
    nullable: true,
    unique: true,
  })
  customer: number;

}
