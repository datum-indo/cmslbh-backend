import * as TypeGraphQL from "type-graphql";
import { CaseDocument } from "../../../models/CaseDocument";
import { Renamedcase } from "../../../models/Renamedcase";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseDocument)
export class CaseDocumentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Renamedcase, {
    nullable: true
  })
  async case(@TypeGraphQL.Root() caseDocument: CaseDocument, @TypeGraphQL.Ctx() ctx: any): Promise<Renamedcase | null> {
    return getPrismaFromContext(ctx).caseDocument.findUnique({
      where: {
        id: caseDocument.id,
      },
    }).case({});
  }
}
