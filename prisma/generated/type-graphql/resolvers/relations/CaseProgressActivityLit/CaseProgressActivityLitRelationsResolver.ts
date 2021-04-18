import * as TypeGraphQL from "type-graphql";
import { CaseProgressActivity } from "../../../models/CaseProgressActivity";
import { CaseProgressActivityLit } from "../../../models/CaseProgressActivityLit";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivityLit)
export class CaseProgressActivityLitRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => CaseProgressActivity, {
    nullable: true
  })
  async caseProgressActivityId(@TypeGraphQL.Root() caseProgressActivityLit: CaseProgressActivityLit, @TypeGraphQL.Ctx() ctx: any): Promise<CaseProgressActivity | null> {
    return getPrismaFromContext(ctx).caseProgressActivityLit.findUnique({
      where: {
        id: caseProgressActivityLit.id,
      },
    }).caseProgressActivityId({});
  }
}
