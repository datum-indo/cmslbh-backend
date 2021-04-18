import * as TypeGraphQL from "type-graphql";
import { CaseViolenceMethod } from "../../../models/CaseViolenceMethod";
import { Renamedcase } from "../../../models/Renamedcase";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseViolenceMethod)
export class CaseViolenceMethodRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Renamedcase, {
    nullable: true
  })
  async caseId(@TypeGraphQL.Root() caseViolenceMethod: CaseViolenceMethod, @TypeGraphQL.Ctx() ctx: any): Promise<Renamedcase | null> {
    return getPrismaFromContext(ctx).caseViolenceMethod.findUnique({
      where: {
        id: caseViolenceMethod.id,
      },
    }).caseId({});
  }
}
