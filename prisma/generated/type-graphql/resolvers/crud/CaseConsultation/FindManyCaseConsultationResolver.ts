import * as TypeGraphQL from "type-graphql";
import { FindManyCaseConsultationArgs } from "./args/FindManyCaseConsultationArgs";
import { CaseConsultation } from "../../../models/CaseConsultation";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseConsultation)
export class FindManyCaseConsultationResolver {
  @TypeGraphQL.Query(_returns => [CaseConsultation], {
    nullable: false
  })
  async caseConsultations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseConsultationArgs): Promise<CaseConsultation[]> {
    return getPrismaFromContext(ctx).caseConsultation.findMany(args);
  }
}
