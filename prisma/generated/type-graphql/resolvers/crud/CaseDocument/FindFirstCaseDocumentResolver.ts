import * as TypeGraphQL from "type-graphql";
import { FindFirstCaseDocumentArgs } from "./args/FindFirstCaseDocumentArgs";
import { CaseDocument } from "../../../models/CaseDocument";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseDocument)
export class FindFirstCaseDocumentResolver {
  @TypeGraphQL.Query(_returns => CaseDocument, {
    nullable: true
  })
  async findFirstCaseDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseDocumentArgs): Promise<CaseDocument | null> {
    return getPrismaFromContext(ctx).caseDocument.findFirst(args);
  }
}
