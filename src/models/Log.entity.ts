import { Column, Entity, Index } from 'typeorm';
import { BaseModel } from './model.base';

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

  @Index()
  @Column({ nullable: true })
  user: number;

  @Column('enum', { enum: Actions, default: Actions.read })
  action: string;


  @Column('enum', { enum: Pages, default: Pages.candidateProfile })
  page: string;


  @Column({ nullable: true })
  value: string;

}
