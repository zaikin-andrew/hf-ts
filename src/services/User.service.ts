import { Service } from 'typedi';
import { messages } from '../managers';
import { User } from '../models';

@Service()
export class UserService {
  protected model = User;

  find(options = {}): Promise<User[]> {
    return this.model.find(options);
  }

  findOne(options = {}): Promise<User> {
    return this.model.findOne(options);
  }

  create({ email, password, confirmPassword }): Promise<User> {
    if (password && password !== confirmPassword) {
      return Promise.reject(new Error(messages.user.passwordsNotMatch));
    }

    const newUser = new this.model({ email, password });
    return newUser.save();
  }
}