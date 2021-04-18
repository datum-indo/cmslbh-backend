import * as TypeGraphQL from "type-graphql";
import { UpdateCaseDocumentArgs } from "./args/UpdateCaseDocumentArgs";
import { CaseDocument } from "../../../models/CaseDocument";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseDocument)
export class UpdateCaseDocumentResolver {
  @TypeGraphQL.Mutation(_returns => CaseDocument, {
    nullable: true
  })
  async updateCaseDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseDocumentArgs): Promise<CaseDocument | null> {
    return getPrismaFromContext(ctx).caseDocument.update(args);
  }
}
