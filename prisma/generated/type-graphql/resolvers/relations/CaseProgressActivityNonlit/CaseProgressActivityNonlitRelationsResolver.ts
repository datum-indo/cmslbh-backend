import * as TypeGraphQL from "type-graphql";
import { CaseProgressActivity } from "../../../models/CaseProgressActivity";
import { CaseProgressActivityNonlit } from "../../../models/CaseProgressActivityNonlit";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivityNonlit)
export class CaseProgressActivityNonlitRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => CaseProgressActivity, {
    nullable: true
  })
  async caseProgressActivityId(@TypeGraphQL.Root() caseProgressActivityNonlit: CaseProgressActivityNonlit, @TypeGraphQL.Ctx() ctx: any): Promise<CaseProgressActivity | null> {
    return getPrismaFromContext(ctx).caseProgressActivityNonlit.findUnique({
      where: {
        id: caseProgressActivityNonlit.id,
      },
    }).caseProgressActivityId({});
  }
}
