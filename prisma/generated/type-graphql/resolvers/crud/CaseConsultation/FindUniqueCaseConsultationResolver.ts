import * as TypeGraphQL from "type-graphql";
import { FindUniqueCaseConsultationArgs } from "./args/FindUniqueCaseConsultationArgs";
import { CaseConsultation } from "../../../models/CaseConsultation";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseConsultation)
export class FindUniqueCaseConsultationResolver {
  @TypeGraphQL.Query(_returns => CaseConsultation, {
    nullable: true
  })
  async caseConsultation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseConsultationArgs): Promise<CaseConsultation | null> {
    return getPrismaFromContext(ctx).caseConsultation.findUnique(args);
  }
}
