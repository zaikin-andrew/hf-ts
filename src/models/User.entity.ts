import * as bcrypt from 'bcrypt';
import { Index, Entity, Column } from 'typeorm';
import { BaseModel } from './model.base';

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

  @Column()
  customer: number;

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

  hashPassword() {
    if (this.password) {
      this.password = bcrypt.hashSync(this.password);
    }
  }
}
