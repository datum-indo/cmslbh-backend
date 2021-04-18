import * as TypeGraphQL from "type-graphql";
import { FindFirstCaseConsultationAppArgs } from "./args/FindFirstCaseConsultationAppArgs";
import { CaseConsultationApp } from "../../../models/CaseConsultationApp";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseConsultationApp)
export class FindFirstCaseConsultationAppResolver {
  @TypeGraphQL.Query(_returns => CaseConsultationApp, {
    nullable: true
  })
  async findFirstCaseConsultationApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseConsultationAppArgs): Promise<CaseConsultationApp | null> {
    return getPrismaFromContext(ctx).caseConsultationApp.findFirst(args);
  }
}
