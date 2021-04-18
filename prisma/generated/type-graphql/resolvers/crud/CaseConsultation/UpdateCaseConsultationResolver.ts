import * as TypeGraphQL from "type-graphql";
import { UpdateCaseConsultationArgs } from "./args/UpdateCaseConsultationArgs";
import { CaseConsultation } from "../../../models/CaseConsultation";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseConsultation)
export class UpdateCaseConsultationResolver {
  @TypeGraphQL.Mutation(_returns => CaseConsultation, {
    nullable: true
  })
  async updateCaseConsultation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseConsultationArgs): Promise<CaseConsultation | null> {
    return getPrismaFromContext(ctx).caseConsultation.update(args);
  }
}
