import { BaseModel } from '../models';

export class BaseService {
  protected model = BaseModel;

  constructor() {
  }

  async findById(id: number) {
    return this.model.findOneById(id);
  }
}