import {
  Args,
  Info,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { User, RolesType } from '../graphql.schema';
import { BatchPayload } from '../prisma/prisma.binding';
// import {MtVocab } from '../prisma/prisma.binding'
import { PrismaService } from '../prisma/prisma.service';

@Resolver()
export class RolesTypeResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('rolesTypes')
  async getUsers(@Args() args, @Info() info?): Promise<RolesType[]> {
    // console.log(JSON.stringify(args));
    return await this.prisma.query.rolesTypes(args, info);
  }

  @Query('rolesType')
  async getUser(@Args() args, @Info() info): Promise<RolesType> {
    return await this.prisma.query.rolesType(args, info);
  }

}
