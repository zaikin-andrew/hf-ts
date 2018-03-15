import { Get, JsonController } from 'routing-controllers';
import { User } from '../models';
import { UserService } from '../services';

@JsonController('/user')
export class UserController {

  constructor(private readonly userService: UserService) {
  }

  @Get()
  async find(): Promise<User[]> {
    return this.userService.find();
  }

}