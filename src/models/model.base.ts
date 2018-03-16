import { BaseEntity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, } from 'typeorm';

export class BaseModel extends BaseEntity {

  constructor(obj = {}) {
    super();
    for (const field in obj) {
      this[field] = obj[field];
    }
  }

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}