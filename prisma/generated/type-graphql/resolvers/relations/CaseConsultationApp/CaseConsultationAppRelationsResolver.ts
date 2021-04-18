import * as TypeGraphQL from "type-graphql";
import { CaseConsultation } from "../../../models/CaseConsultation";
import { CaseConsultationApp } from "../../../models/CaseConsultationApp";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseConsultationApp)
export class CaseConsultationAppRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async appConsultation(@TypeGraphQL.Root() caseConsultationApp: CaseConsultationApp, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).caseConsultationApp.findUnique({
      where: {
        id: caseConsultationApp.id,
      },
    }).appConsultation({});
  }

  @TypeGraphQL.FieldResolver(_type => CaseConsultation, {
    nullable: true
  })
  async caseConsultationId(@TypeGraphQL.Root() caseConsultationApp: CaseConsultationApp, @TypeGraphQL.Ctx() ctx: any): Promise<CaseConsultation | null> {
    return getPrismaFromContext(ctx).caseConsultationApp.findUnique({
      where: {
        id: caseConsultationApp.id,
      },
    }).caseConsultationId({});
  }
}
