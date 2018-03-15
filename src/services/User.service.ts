import { Service } from 'typedi';
import { User } from '../models';
import { BaseService } from './service.base';

@Service()
export class UserService extends BaseService {
  protected model = User;

  async find(): Promise<User[]> {
    return this.model.find();
  }
}