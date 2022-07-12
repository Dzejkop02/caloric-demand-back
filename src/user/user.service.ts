import { Injectable } from '@nestjs/common';
import { RegisterUserResponse } from 'src/interfaces/user';
import { User } from './user.entity';
import { RegisterDto } from './dto/register.dto';
import { hashPwd } from '../utils/hash-pwd';

@Injectable()
export class UserService {
  filter(user: User): RegisterUserResponse {
    const { id, username } = user;
    return { id, username };
  }

  async register(newUser: RegisterDto): Promise<RegisterUserResponse> {
    const user = new User();
    user.username = newUser.username;
    user.pwdHash = hashPwd(newUser.pwd);
    await user.save();

    return this.filter(user);
  }
}
