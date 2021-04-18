import * as TypeGraphQL from "type-graphql";
import { UpsertCaseConsultationAppArgs } from "./args/UpsertCaseConsultationAppArgs";
import { CaseConsultationApp } from "../../../models/CaseConsultationApp";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseConsultationApp)
export class UpsertCaseConsultationAppResolver {
  @TypeGraphQL.Mutation(_returns => CaseConsultationApp, {
    nullable: false
  })
  async upsertCaseConsultationApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseConsultationAppArgs): Promise<CaseConsultationApp> {
    return getPrismaFromContext(ctx).caseConsultationApp.upsert(args);
  }
}
