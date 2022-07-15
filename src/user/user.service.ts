import { Injectable } from '@nestjs/common';
import { RegisterUserResponse } from 'src/interfaces/user';
import { User } from './user.entity';
import { RegisterDto } from './dto/register.dto';
import { hashPwd } from '../utils/hash-pwd';

@Injectable()
export class UserService {
  filter(user: User): RegisterUserResponse {
    const { id, username } = user;
    return { ok: true, id, username };
  }

  async register(newUserData: RegisterDto): Promise<RegisterUserResponse> {
    const foundUser = await User.findOne({
      where: {
        username: newUserData.username,
      },
    });

    if (foundUser) {
      return {
        ok: false,
        error: 'Entered username is taken.',
      };
    }

    const newUser = new User();
    newUser.username = newUserData.username;
    newUser.pwdHash = hashPwd(newUserData.pwd);
    await newUser.save();

    return this.filter(newUser);
  }
}
