import * as TypeGraphQL from "type-graphql";
import { CaseViolatedRight } from "../../../models/CaseViolatedRight";
import { Renamedcase } from "../../../models/Renamedcase";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseViolatedRight)
export class CaseViolatedRightRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Renamedcase, {
    nullable: true
  })
  async caseId(@TypeGraphQL.Root() caseViolatedRight: CaseViolatedRight, @TypeGraphQL.Ctx() ctx: any): Promise<Renamedcase | null> {
    return getPrismaFromContext(ctx).caseViolatedRight.findUnique({
      where: {
        id: caseViolatedRight.id,
      },
    }).caseId({});
  }
}
