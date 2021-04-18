import * as TypeGraphQL from "type-graphql";
import { UpsertCaseDocumentArgs } from "./args/UpsertCaseDocumentArgs";
import { CaseDocument } from "../../../models/CaseDocument";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseDocument)
export class UpsertCaseDocumentResolver {
  @TypeGraphQL.Mutation(_returns => CaseDocument, {
    nullable: false
  })
  async upsertCaseDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseDocumentArgs): Promise<CaseDocument> {
    return getPrismaFromContext(ctx).caseDocument.upsert(args);
  }
}
