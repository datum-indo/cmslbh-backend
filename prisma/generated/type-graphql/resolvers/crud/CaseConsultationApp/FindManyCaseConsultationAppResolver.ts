import * as TypeGraphQL from "type-graphql";
import { FindManyCaseConsultationAppArgs } from "./args/FindManyCaseConsultationAppArgs";
import { CaseConsultationApp } from "../../../models/CaseConsultationApp";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseConsultationApp)
export class FindManyCaseConsultationAppResolver {
  @TypeGraphQL.Query(_returns => [CaseConsultationApp], {
    nullable: false
  })
  async caseConsultationApps(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseConsultationAppArgs): Promise<CaseConsultationApp[]> {
    return getPrismaFromContext(ctx).caseConsultationApp.findMany(args);
  }
}
