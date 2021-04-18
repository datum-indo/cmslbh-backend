import * as TypeGraphQL from "type-graphql";
import { CreateCaseConsultationAppArgs } from "./args/CreateCaseConsultationAppArgs";
import { CaseConsultationApp } from "../../../models/CaseConsultationApp";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseConsultationApp)
export class CreateCaseConsultationAppResolver {
  @TypeGraphQL.Mutation(_returns => CaseConsultationApp, {
    nullable: false
  })
  async createCaseConsultationApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseConsultationAppArgs): Promise<CaseConsultationApp> {
    return getPrismaFromContext(ctx).caseConsultationApp.create(args);
  }
}
