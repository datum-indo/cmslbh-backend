import * as TypeGraphQL from "type-graphql";
import { CaseClassification } from "../../../models/CaseClassification";
import { Renamedcase } from "../../../models/Renamedcase";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseClassification)
export class CaseClassificationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Renamedcase, {
    nullable: true
  })
  async caseId(@TypeGraphQL.Root() caseClassification: CaseClassification, @TypeGraphQL.Ctx() ctx: any): Promise<Renamedcase | null> {
    return getPrismaFromContext(ctx).caseClassification.findUnique({
      where: {
        id: caseClassification.id,
      },
    }).caseId({});
  }
}
