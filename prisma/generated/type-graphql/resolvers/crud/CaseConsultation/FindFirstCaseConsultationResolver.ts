import * as TypeGraphQL from "type-graphql";
import { FindFirstCaseConsultationArgs } from "./args/FindFirstCaseConsultationArgs";
import { CaseConsultation } from "../../../models/CaseConsultation";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseConsultation)
export class FindFirstCaseConsultationResolver {
  @TypeGraphQL.Query(_returns => CaseConsultation, {
    nullable: true
  })
  async findFirstCaseConsultation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseConsultationArgs): Promise<CaseConsultation | null> {
    return getPrismaFromContext(ctx).caseConsultation.findFirst(args);
  }
}
