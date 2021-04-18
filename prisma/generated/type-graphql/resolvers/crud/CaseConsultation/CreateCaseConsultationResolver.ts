import * as TypeGraphQL from "type-graphql";
import { CreateCaseConsultationArgs } from "./args/CreateCaseConsultationArgs";
import { CaseConsultation } from "../../../models/CaseConsultation";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseConsultation)
export class CreateCaseConsultationResolver {
  @TypeGraphQL.Mutation(_returns => CaseConsultation, {
    nullable: false
  })
  async createCaseConsultation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseConsultationArgs): Promise<CaseConsultation> {
    return getPrismaFromContext(ctx).caseConsultation.create(args);
  }
}
