import { Authorized, Body, CurrentUser, Get, JsonController, Param, Post } from 'routing-controllers';
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
  find(@CurrentUser() user?: User): Promise<User[]> {
    return this.userService.find();
  }

  @Get('/hello/my/:name')
  qweqwe(@Param('name') name: string) {
    return name;
  }


}