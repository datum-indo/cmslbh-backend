import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Network } from '../prisma/prisma.binding';
// import {MtVocab } from '../prisma/prisma.binding'
import { PrismaService } from '../prisma/prisma.service';

@Resolver()
export class NetworkResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('networks')
  async getNetworks(@Args() args, @Info() info?): Promise<Network[]> {
    // console.log(JSON.stringify(args));
    return await this.prisma.query.networks(args, info);
  }

  @Query('network')
  async getNetwork(@Args() args, @Info() info): Promise<Network> {
    return await this.prisma.query.network(args, info);
  }

  @Mutation('createNetwork')
  async createNetwork(@Args() args, @Info() info): Promise<Network> {
    return await this.prisma.mutation.createNetwork(args, info);
  }

  @Mutation('updateNetwork')
  async updateNetwork(@Args() args, @Info() info): Promise<Network> {
    return await this.prisma.mutation.updateNetwork(args, info);
  }
}
