import { BaseEntity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, } from 'typeorm';

export class BaseModel extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}