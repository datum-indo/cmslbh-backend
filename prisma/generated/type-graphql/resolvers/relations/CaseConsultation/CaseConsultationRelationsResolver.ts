import * as TypeGraphQL from "type-graphql";
import { CaseConsultation } from "../../../models/CaseConsultation";
import { CaseConsultationApp } from "../../../models/CaseConsultationApp";
import { Renamedcase } from "../../../models/Renamedcase";
import { CaseConsultationAppsArgs } from "./args/CaseConsultationAppsArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseConsultation)
export class CaseConsultationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Renamedcase, {
    nullable: true
  })
  async caseId(@TypeGraphQL.Root() caseConsultation: CaseConsultation, @TypeGraphQL.Ctx() ctx: any): Promise<Renamedcase | null> {
    return getPrismaFromContext(ctx).caseConsultation.findUnique({
      where: {
        id: caseConsultation.id,
      },
    }).caseId({});
  }

  @TypeGraphQL.FieldResolver(_type => [CaseConsultationApp], {
    nullable: false
  })
  async apps(@TypeGraphQL.Root() caseConsultation: CaseConsultation, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CaseConsultationAppsArgs): Promise<CaseConsultationApp[]> {
    return getPrismaFromContext(ctx).caseConsultation.findUnique({
      where: {
        id: caseConsultation.id,
      },
    }).apps(args);
  }
}
