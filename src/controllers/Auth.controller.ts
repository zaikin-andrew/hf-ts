import { Get, JsonController, Post } from 'routing-controllers';
import { JobService, UserService } from '../services';

@JsonController('/auth')
export class JobController {

  constructor(private readonly userService: JobService) {
  }

  @Post('/signin')
  async signIn() {
  }

  @Post('/singup')
  async signUp() {
  }

}