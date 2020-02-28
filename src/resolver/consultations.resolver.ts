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
export class ConsultationResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('caseConsultations')
  async getCaseConsultations(
    @Args() args,
    @Info() info?,
  ): Promise<CaseConsultation[]> {
    // console.log(JSON.stringify(args));
    return await this.prisma.query.caseConsultations(args, info);
  }

  @Query('caseConsultation')
  async getCaseConsultation(
    @Args() args,
    @Info() info,
  ): Promise<CaseConsultation> {
    return await this.prisma.query.caseConsultation(args, info);
  }
}
