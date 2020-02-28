import {
  Args,
  Info,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { Client } from '../graphql.schema';
import { BatchPayload } from '../prisma/prisma.binding';
// import {MtVocab } from '../prisma/prisma.binding'
import { PrismaService } from '../prisma/prisma.service';

@Resolver()
export class ClientResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('clients')
  async getClients(@Args() args, @Info() info): Promise<Client[]> {
    return await this.prisma.query.clients(args, info);
  }

  @Query('client')
  async getClient(@Args() args, @Info() info): Promise<Client> {
    return await this.prisma.query.client(args, info);
  }

  @Mutation('updateClient')
  async updateClient(@Args() args, @Info() info): Promise<Client | null> {
    return await this.prisma.mutation.updateClient(args, info);
  }

  @Mutation('createClient')
  async createClient(@Args() args, @Info() info): Promise<Client> {
    return await this.prisma.mutation.createClient(args, info);
  }
}
