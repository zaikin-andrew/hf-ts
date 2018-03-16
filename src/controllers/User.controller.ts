import { Authorized, Body, Get, JsonController, Param, Post } from 'routing-controllers';
import { User } from '../models';
import { UserService } from '../services';

@JsonController('/user')
export class UserController {

  constructor(private readonly userService: UserService) {
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    return id;
  }
  @Authorized()
  @Get('/')
  find(): Promise<User[]> {
    return this.userService.find();
  }

  @Get('/hello/my/:name')
  qweqwe(@Param('name') name: string) {
    return name;
  }


}