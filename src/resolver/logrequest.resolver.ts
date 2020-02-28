import {
  Args,
  Info,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { LogRequest, BatchPayload, LogRequestSubscriptionPayload } from '../prisma/prisma.binding';
// import {MtVocab } from '../prisma/prisma.binding'
import { PrismaService } from '../prisma/prisma.service';

@Resolver()
export class LogRequestResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('logRequests')
  async getLogRequests(@Args() args, @Info() info?): Promise<LogRequest[]> {
    // console.log(JSON.stringify(args));
    return await this.prisma.query.logRequests(args, info);
  }

  @Query('logRequest')
  async getLogRequest(@Args() args, @Info() info): Promise<LogRequest> {
    return await this.prisma.query.logRequest(args, info);
  }

  @Mutation('createLogRequest')
  async createLogRequest(@Args() args, @Info() info): Promise<LogRequest> {
    return await this.prisma.mutation.createLogRequest(args, info);
  }

  @Mutation('updateLogRequest')
  async updateLogRequest(@Args() args, @Info() info): Promise<LogRequest> {
    return await this.prisma.mutation.updateLogRequest(args, info);
  }

  @Mutation('deleteManyLogRequests')
  async deleteManyLogRequests(@Args() args, @Info() info): Promise<BatchPayload> {
    return await this.prisma.mutation.deleteManyLogRequests(args, info);
  }

  @Subscription('logRequest')
  async subscribeLogRequests(@Args() args, @Info() info): Promise<any> {
    return await this.prisma.subscription.logRequest(args, info);
  }
}
