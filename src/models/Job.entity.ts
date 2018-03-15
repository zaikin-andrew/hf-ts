import { Column, Entity, Index } from 'typeorm';
import { BaseModel } from './model.base';


@Entity('jobs')
export class Job extends BaseModel {

  @Column({ nullable: true })
  name: string;


  @Column({ nullable: true })
  totalScore: number;


  @Column({ nullable: true })
  basicScore: number;


  @Column({ nullable: true })
  skillsScore: number;


  @Column({ nullable: true })
  culturalScore: number;


  @Column({ nullable: true })
  weightBasic: number;


  @Column({ nullable: true })
  weightSkills: number;


  @Column({ nullable: true })
  weightCultural: number;


  @Column({ nullable: true })
  matchesExcellent: number;


  @Column({ nullable: true })
  matchesGood: number;


  @Column({ nullable: true })
  matchesPoor: number;


  @Column({ nullable: true })
  numberFavorites: number;


  @Column({ nullable: true })
  numberRejected: number;


  @Column({ default: true })
  active: boolean;


  @Column({ default: false })
  archive: boolean;

  @Index()
  @Column({ nullable: true })
  customer: number;

  @Column('datetime', { nullable: true })
  lastUploadCandidatesDate: Date;

}
