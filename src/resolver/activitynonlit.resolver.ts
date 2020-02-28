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
export class CaseProgressActivityNonLitResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Mutation('deleteManyCaseProgressActivityNonlits')
  async deleteManyCaseProgressActivityNonlits(
    @Args() args,
    @Info() info,
  ): Promise<BatchPayload> {
    return await this.prisma.mutation.deleteManyCaseProgressActivityNonlits(
      args,
      info,
    );
  }
}
