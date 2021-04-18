import * as TypeGraphQL from "type-graphql";
import { CaseProgress } from "../../../models/CaseProgress";
import { Renamedcase } from "../../../models/Renamedcase";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgress)
export class CaseProgressRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Renamedcase, {
    nullable: true
  })
  async case(@TypeGraphQL.Root() caseProgress: CaseProgress, @TypeGraphQL.Ctx() ctx: any): Promise<Renamedcase | null> {
    return getPrismaFromContext(ctx).caseProgress.findUnique({
      where: {
        id: caseProgress.id,
      },
    }).case({});
  }
}
