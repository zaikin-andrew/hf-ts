import { JsonController, Get, Post as HttpPost, Param, Delete, Body } from 'routing-controllers';
import { Service } from 'typedi';
import { UserService } from '../services';
import { User } from '../models';

@Service()
@JsonController()
export class UserController {

  constructor(private userService: UserService) {
  }

}