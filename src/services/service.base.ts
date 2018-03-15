import { BaseModel } from '../models';

export class BaseService {
  protected model = BaseModel;

  constructor() {
  }

  async find(options = {}) {
    return this.model.find(options);
  }

  async findById(id: number) {
    return this.model.findOneById(id);
  }
}