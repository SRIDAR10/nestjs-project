import { Injectable, Logger } from '@nestjs/common';
import { IUsers } from './interfaces/users.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SlackService {
  constructor(
    @InjectModel('users') private readonly usersModel: Model<IUsers>,
  ) {}

  public async getAllUsers() {
    try {
      const users = await this.usersModel.find().exec();
      console.log(users);
      return users;
    } catch (e) {
      Logger.error(e);
    }
  }
}
