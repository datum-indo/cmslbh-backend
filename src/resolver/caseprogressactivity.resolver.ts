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
export class CaseProgressActivityResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Mutation('deleteManyCaseProgressActivities')
  async deleteManyCaseProgressActivities(
    @Args() args,
    @Info() info,
  ): Promise<BatchPayload> {
    return await this.prisma.mutation.deleteManyCaseProgressActivities(
      args,
      info,
    );
  }
}
