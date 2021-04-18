import * as TypeGraphQL from "type-graphql";
import { UpsertCaseConsultationArgs } from "./args/UpsertCaseConsultationArgs";
import { CaseConsultation } from "../../../models/CaseConsultation";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseConsultation)
export class UpsertCaseConsultationResolver {
  @TypeGraphQL.Mutation(_returns => CaseConsultation, {
    nullable: false
  })
  async upsertCaseConsultation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseConsultationArgs): Promise<CaseConsultation> {
    return getPrismaFromContext(ctx).caseConsultation.upsert(args);
  }
}
