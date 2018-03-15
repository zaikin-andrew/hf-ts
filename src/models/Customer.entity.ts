import { Column, Entity } from 'typeorm';
import { BaseModel } from './model.base';


@Entity('customers')
export class Customer extends BaseModel {

  @Column({ nullable: true })
  name: string;

}
