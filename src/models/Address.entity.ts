import { Column, Entity, Index, ManyToOne, } from 'typeorm';
import { Customer } from './Customer.entity';
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

  @ManyToOne(type => Customer, customer => customer.address)
  customer: Customer;

}
