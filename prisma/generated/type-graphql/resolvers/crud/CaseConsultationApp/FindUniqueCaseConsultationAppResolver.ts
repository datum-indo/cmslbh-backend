import * as TypeGraphQL from "type-graphql";
import { FindUniqueCaseConsultationAppArgs } from "./args/FindUniqueCaseConsultationAppArgs";
import { CaseConsultationApp } from "../../../models/CaseConsultationApp";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseConsultationApp)
export class FindUniqueCaseConsultationAppResolver {
  @TypeGraphQL.Query(_returns => CaseConsultationApp, {
    nullable: true
  })
  async caseConsultationApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseConsultationAppArgs): Promise<CaseConsultationApp | null> {
    return getPrismaFromContext(ctx).caseConsultationApp.findUnique(args);
  }
}
