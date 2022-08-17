import { HttpException, HttpStatus, Injectable, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(user: User) {
    try {
      if (!user.email || !user.firstName || !user.lastName) {
        throw new HttpException(
          'Please fill all the information',
          HttpStatus.BAD_REQUEST,
        );
      }

      const isExits = await this.userModel.findOne({ email: user.email });

      if (!isExits) {
        let createdUser = new this.userModel(user);
        let _user = await createdUser.save();
        return _user;
      } else {
        throw new HttpException('Email already exits', HttpStatus.BAD_REQUEST);
      }
    } catch (error) {
      return new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAllUsers() {
    return await this.userModel.find().exec();
  }
}
