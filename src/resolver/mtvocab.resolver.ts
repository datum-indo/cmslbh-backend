import {
  Args,
  Info,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { MtVocab } from '../prisma/prisma.binding';
import { PrismaService } from '../prisma/prisma.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Resolver()
@UseGuards(JwtAuthGuard)
export class MTVocabResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('mtVocabs')
  async getMtVocabs(@Args() args, @Info() info): Promise<MtVocab[]> {
    return await this.prisma.query.mtVocabs(args, info);
  }

  @Query('mtVocab')
  async getClient(@Args() args, @Info() info): Promise<MtVocab> {
    return await this.prisma.query.mtVocab(args, info);
  }
}
