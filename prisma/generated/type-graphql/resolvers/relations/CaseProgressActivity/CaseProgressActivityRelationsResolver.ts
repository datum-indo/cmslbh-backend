import * as TypeGraphQL from "type-graphql";
import { CaseProgressActivity } from "../../../models/CaseProgressActivity";
import { CaseProgressActivityLit } from "../../../models/CaseProgressActivityLit";
import { CaseProgressActivityNonlit } from "../../../models/CaseProgressActivityNonlit";
import { Renamedcase } from "../../../models/Renamedcase";
import { CaseProgressActivityActivitieslitArgs } from "./args/CaseProgressActivityActivitieslitArgs";
import { CaseProgressActivityActivitiesnonlitArgs } from "./args/CaseProgressActivityActivitiesnonlitArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivity)
export class CaseProgressActivityRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Renamedcase, {
    nullable: true
  })
  async caseId(@TypeGraphQL.Root() caseProgressActivity: CaseProgressActivity, @TypeGraphQL.Ctx() ctx: any): Promise<Renamedcase | null> {
    return getPrismaFromContext(ctx).caseProgressActivity.findUnique({
      where: {
        id: caseProgressActivity.id,
      },
    }).caseId({});
  }

  @TypeGraphQL.FieldResolver(_type => [CaseProgressActivityLit], {
    nullable: false
  })
  async activitieslit(@TypeGraphQL.Root() caseProgressActivity: CaseProgressActivity, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CaseProgressActivityActivitieslitArgs): Promise<CaseProgressActivityLit[]> {
    return getPrismaFromContext(ctx).caseProgressActivity.findUnique({
      where: {
        id: caseProgressActivity.id,
      },
    }).activitieslit(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CaseProgressActivityNonlit], {
    nullable: false
  })
  async activitiesnonlit(@TypeGraphQL.Root() caseProgressActivity: CaseProgressActivity, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CaseProgressActivityActivitiesnonlitArgs): Promise<CaseProgressActivityNonlit[]> {
    return getPrismaFromContext(ctx).caseProgressActivity.findUnique({
      where: {
        id: caseProgressActivity.id,
      },
    }).activitiesnonlit(args);
  }
}
