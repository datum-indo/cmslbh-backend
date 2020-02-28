import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { UserResolver } from '../resolver/users.resolver';
import { ReqToken } from './interfaces/req-token.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    public userResolver: UserResolver,
  ) {}

  async createToken(reqs: ReqToken) {
    const dataUser = await this.userResolver.getUsers(
      {
        where: {
          AND: [{ password: reqs.password }],
          email: reqs.userName,
          status: '1',
        },
      },
      `{ id
    address
    avatar
    email
    name
    password
    phone
    position
    rememberToken
    username
    profile {
      id
      noContact
      occupation
      photo
    }
    roles_type {
      id
      type {
        id,
        description
      }
    }}`,
    );
    // console.log(JSON.stringify(dataUser[0]));
    if (dataUser[0] == null) {
      throw new UnauthorizedException();
    }
    const user: JwtPayload = { email: dataUser[0].email };
    const accessToken = this.jwtService.sign(user);
    return {
      msg: 'ok',
      user: dataUser[0],
      token: accessToken,
    };
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.userResolver.getUsers({
      where: {
        email: payload.email,
      },
    });
  }
}
