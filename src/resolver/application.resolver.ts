import {
  Args,
  Info,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { Application } from '../graphql.schema';
import { BatchPayload } from '../prisma/prisma.binding';
// import {MtVocab } from '../prisma/prisma.binding'
import { PrismaService } from '../prisma/prisma.service';

@Resolver()
export class ApplicationResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('applications')
  async getApplications(@Args() args, @Info() info): Promise<Application[]> {
    return await this.prisma.query.applications(args, info);
  }

  @Query('application')
  async getApplication(@Args() args, @Info() info): Promise<Application> {
    return await this.prisma.query.application(args, info);
  }

  @Mutation('updateApplication')
  async updateApplication(
    @Args() args,
    @Info() info,
  ): Promise<Application | null> {
    return await this.prisma.mutation.updateApplication(args, info);
  }

  @Mutation('createApplication')
  async createApplication(@Args() args, @Info() info): Promise<Application> {
    return await this.prisma.mutation.createApplication(args, info);
  }
}
