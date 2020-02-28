import {
  Args,
  Info,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { User } from '../graphql.schema';
import { BatchPayload } from '../prisma/prisma.binding';
// import {MtVocab } from '../prisma/prisma.binding'
import { PrismaService } from '../prisma/prisma.service';

@Resolver()
export class UserResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('users')
  async getUsers(@Args() args, @Info() info?): Promise<User[]> {
    // console.log(JSON.stringify(args));
    return await this.prisma.query.users(args, info);
  }

  @Query('user')
  async getUser(@Args() args, @Info() info): Promise<User> {
    return await this.prisma.query.user(args, info);
  }

  @Mutation('createUser')
  async createUser(@Args() args, @Info() info): Promise<User> {
    return await this.prisma.mutation.createUser(args, info);
  }

  @Mutation('updateUser')
  async updateUser(@Args() args, @Info() info): Promise<User> {
    return await this.prisma.mutation.updateUser(args, info);
  }
}
