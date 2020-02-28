import {
  Args,
  Info,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { User, RolesType } from '../graphql.schema';
import { BatchPayload, Role } from '../prisma/prisma.binding';
// import {MtVocab } from '../prisma/prisma.binding'
import { PrismaService } from '../prisma/prisma.service';

@Resolver()
export class RoleResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('roles')
  async getRoles(@Args() args, @Info() info?): Promise<Role[]> {
    // console.log(JSON.stringify(args));
    return await this.prisma.query.roles(args, info);
  }

  @Query('role')
  async getRole(@Args() args, @Info() info): Promise<Role> {
    return await this.prisma.query.role(args, info);
  }

  @Mutation('deleteManyRoles')
  async deleteManyRoles(@Args() args, @Info() info): Promise<BatchPayload> {
    return await this.prisma.mutation.deleteManyRoles(args, info);
  }
}
