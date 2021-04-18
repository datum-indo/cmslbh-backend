import * as TypeGraphQL from "type-graphql";
import { FindManyCaseDocumentArgs } from "./args/FindManyCaseDocumentArgs";
import { CaseDocument } from "../../../models/CaseDocument";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseDocument)
export class FindManyCaseDocumentResolver {
  @TypeGraphQL.Query(_returns => [CaseDocument], {
    nullable: false
  })
  async caseDocuments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseDocumentArgs): Promise<CaseDocument[]> {
    return getPrismaFromContext(ctx).caseDocument.findMany(args);
  }
}
