import {
  Args,
  Info,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { User, CaseConsultation } from '../graphql.schema';
import { BatchPayload } from '../prisma/prisma.binding';
// import {MtVocab } from '../prisma/prisma.binding'
import { PrismaService } from '../prisma/prisma.service';

@Resolver()
export class CasePkResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('casePks')
  async getCasePks(@Args() args, @Info() info?): Promise<CaseConsultation[]> {
    // console.log(JSON.stringify(args));
    return await this.prisma.query.casePks(args, info);
  }

  @Query('casePk')
  async getCasePk(@Args() args, @Info() info): Promise<CaseConsultation> {
    return await this.prisma.query.casePk(args, info);
  }
}
