import * as bcrypt from 'bcrypt-nodejs';
import { BeforeInsert, Column, Entity, Index, ManyToOne, OneToMany } from 'typeorm';
import { Customer } from './Customer.entity';
import { Log } from './Log.entity';
import { BaseModel } from './model.base';
import { Note } from './Note.entity';
import { Rating } from './Rating.entity';

export enum UserTypes {
  admin   = 'admin',
  manager = 'manager',
  user    = 'user',
}

@Entity('users')
export class User extends BaseModel {

  @Index({ unique: true })
  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  password: string;

  @Column('enum', {
    enum: UserTypes,
    default: UserTypes.manager,
  })
  type: string;

  @OneToMany(type => Log, d => d.user)
  logs: Log[];

  @OneToMany(type => Note, d => d.user)
  notes: Note[];

  @OneToMany(type => Rating, d => d.user)
  ratings: Rating[];

  @ManyToOne(type => Customer, d => d.users)
  customer: Customer;

  @BeforeInsert()
  hashPassword() {
    if (this.password) {
      this.password = bcrypt.hashSync(this.password);
    }
  }

  get safe() {
    return {
      id: this.id,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      type: this.type,
    };
  }

  comparePassword(password): boolean {
    return bcrypt.compareSync(password, this.password);
  }


}
