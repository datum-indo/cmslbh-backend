import {
  Args,
  Info,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { Case } from '../graphql.schema';
import { BatchPayload } from '../prisma/prisma.binding';
// import {MtVocab } from '../prisma/prisma.binding'
import { PrismaService } from '../prisma/prisma.service';

@Resolver()
export class CaseResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('cases')
  async getCases(@Args() args, @Info() info): Promise<Case[]> {
    return await this.prisma.query.cases(args, info);
  }

  @Query('case')
  async getCase(@Args() args, @Info() info): Promise<Case> {
    return await this.prisma.query.case(args, info);
  }

  @Mutation('updateCase')
  async updateCase(@Args() args, @Info() info): Promise<Case | null> {
    return await this.prisma.mutation.updateCase(args, info);
  }

  @Mutation('createCase')
  async createCase(@Args() args, @Info() info): Promise<Case> {
    return await this.prisma.mutation.createCase(args, info);
  }
}
