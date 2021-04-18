import * as TypeGraphQL from "type-graphql";
import { UpdateCaseConsultationAppArgs } from "./args/UpdateCaseConsultationAppArgs";
import { CaseConsultationApp } from "../../../models/CaseConsultationApp";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseConsultationApp)
export class UpdateCaseConsultationAppResolver {
  @TypeGraphQL.Mutation(_returns => CaseConsultationApp, {
    nullable: true
  })
  async updateCaseConsultationApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseConsultationAppArgs): Promise<CaseConsultationApp | null> {
    return getPrismaFromContext(ctx).caseConsultationApp.update(args);
  }
}
