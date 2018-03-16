import { Column, Entity, Index, OneToMany } from 'typeorm';
import { BaseModel } from './model.base';
import { Response } from './Response.entity';
import { User } from './User.entity';

export enum Actions {
  auth = 'auth',
  read = 'read'
}

export enum Pages {
  resutl           = 'resultPage',
  candidateProfile = 'candidateProfile'
}

@Entity('logs')
export class Log extends BaseModel {

  @OneToMany(type => User, d => d.logs)
  user: User;

  @Column('enum', { enum: Actions, default: Actions.read })
  action: string;


  @Column('enum', { enum: Pages, default: Pages.candidateProfile })
  page: string;


  @Column({ nullable: true })
  value: string;

}
