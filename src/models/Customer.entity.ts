import { Column, Entity, OneToMany } from 'typeorm';
import { Address } from './Address.entity';
import { Contact } from './Contact.entity';
import { Job } from './Job.entity';
import { BaseModel } from './model.base';
import { User } from './User.entity';


@Entity('customers')
export class Customer extends BaseModel {

  @Column({ nullable: true })
  name: string;

  @OneToMany(type => User, user => user.customer)
  users: User[];

  @OneToMany(type => Address, address => address.customer)
  address: Address[];

  @OneToMany(type => Contact, contact => contact.customer)
  contact: Contact[];

  @OneToMany(type => Job, job => job.customer)
  jobs: Job[];
}
