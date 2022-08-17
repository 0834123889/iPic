import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { User } from 'src/schemas/user.schema';
import { UserService } from 'src/services/user/user.service';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/all')
  public async getAllUsers() {
    return await this.userService.findAllUsers();
  }

  @Post('/register')
  public async createUser(@Body() user: User, @Res() res: Response) {
     const _user = await this.userService.createUser(user);
     res.status(HttpStatus.CREATED).send();
  }
}
