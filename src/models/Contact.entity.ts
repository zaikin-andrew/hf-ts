import { Column, Entity, Index, ManyToOne } from 'typeorm';
import { Customer } from './Customer.entity';
import { BaseModel } from './model.base';


@Entity('contacts')
export class Contact extends BaseModel {

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  website: string;

  @ManyToOne(type => Customer, customer => customer.contact)
  customer: Customer;

}
