import * as TypeGraphQL from "type-graphql";
import { DeleteCaseConsultationArgs } from "./args/DeleteCaseConsultationArgs";
import { CaseConsultation } from "../../../models/CaseConsultation";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseConsultation)
export class DeleteCaseConsultationResolver {
  @TypeGraphQL.Mutation(_returns => CaseConsultation, {
    nullable: true
  })
  async deleteCaseConsultation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseConsultationArgs): Promise<CaseConsultation | null> {
    return getPrismaFromContext(ctx).caseConsultation.delete(args);
  }
}
