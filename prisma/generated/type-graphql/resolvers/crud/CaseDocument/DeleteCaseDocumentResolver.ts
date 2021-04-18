import * as TypeGraphQL from "type-graphql";
import { DeleteCaseDocumentArgs } from "./args/DeleteCaseDocumentArgs";
import { CaseDocument } from "../../../models/CaseDocument";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseDocument)
export class DeleteCaseDocumentResolver {
  @TypeGraphQL.Mutation(_returns => CaseDocument, {
    nullable: true
  })
  async deleteCaseDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseDocumentArgs): Promise<CaseDocument | null> {
    return getPrismaFromContext(ctx).caseDocument.delete(args);
  }
}
