import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { UserResolver } from '../resolver/users.resolver';
import { ReqToken } from './interfaces/req-token.interface';
import { UserCrudResolver, UserRelationsResolver } from '../../prisma/generated/type-graphql';
import { PrismaClient } from "@prisma/client";
import { PrismaService } from '../resolverprisma/prisma.service';

interface Context {
  prisma: PrismaClient;
}


@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    public userResolver: UserResolver,
    public userCrud: UserCrudResolver,
    public userRelation: UserRelationsResolver,
    public prisma: PrismaService
  ) { }

  async createToken(reqs: ReqToken) {
    console.log(reqs)
    const dataUser = await this.prisma.user.findMany(
      {
        include: { profile: true, roles_type: { include: { type:true } } },
        where: {
          AND: [{
            password: { equals: reqs.password }, email: { equals: reqs.userName },
            status: { equals: '1' },
          }],

        },
      },

    );

    // const dataUser = await this.prisma.user.findFirst({
    //   include: { profile: true, roles_type: { include: { type: true } } }, where: {
    //     AND:[{password:{equals:reqs.password},email:{e}}]

    // }})

    console.log(JSON.stringify(dataUser[0]));
    if (dataUser[0] == null) {
      throw new UnauthorizedException();
    }

    // const roles_type = 

    // const userFormatted = {
    //   ...dataUser[0], profile: dataUser[0].UserProfile, roles_type: {
    //   id:dataUser[0].id, type:[]
    // }}}

    // const user: JwtPayload = { email: dataUser[0].email };
    const accessToken = this.jwtService.sign(dataUser[0]);
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
// {
//   prisma: this.prisma, info: `{ id
//   address
//   avatar
//   email
//   name
//   password
//   phone
//   position
//   rememberToken
//   username
//   profile {
//     id
//     noContact
//     occupation
//     photo
//   }
//   roles_type {
//     id
//     type {
//       id,
//       description
//     }
//   }}`},
// {
//   where: {
//     AND: [{ password: { equals: reqs.password } }],
//     email: { equals: reqs.userName },
//     status: { equals: '1' },
//   },
// },

