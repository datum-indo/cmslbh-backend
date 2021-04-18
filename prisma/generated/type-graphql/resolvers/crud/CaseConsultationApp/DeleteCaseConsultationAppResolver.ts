import * as TypeGraphQL from "type-graphql";
import { DeleteCaseConsultationAppArgs } from "./args/DeleteCaseConsultationAppArgs";
import { CaseConsultationApp } from "../../../models/CaseConsultationApp";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseConsultationApp)
export class DeleteCaseConsultationAppResolver {
  @TypeGraphQL.Mutation(_returns => CaseConsultationApp, {
    nullable: true
  })
  async deleteCaseConsultationApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseConsultationAppArgs): Promise<CaseConsultationApp | null> {
    return getPrismaFromContext(ctx).caseConsultationApp.delete(args);
  }
}
