import * as TypeGraphQL from "type-graphql";
import { FindUniqueCaseDocumentArgs } from "./args/FindUniqueCaseDocumentArgs";
import { CaseDocument } from "../../../models/CaseDocument";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseDocument)
export class FindUniqueCaseDocumentResolver {
  @TypeGraphQL.Query(_returns => CaseDocument, {
    nullable: true
  })
  async caseDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseDocumentArgs): Promise<CaseDocument | null> {
    return getPrismaFromContext(ctx).caseDocument.findUnique(args);
  }
}
