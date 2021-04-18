import * as TypeGraphQL from "type-graphql";
import { CreateCaseDocumentArgs } from "./args/CreateCaseDocumentArgs";
import { CaseDocument } from "../../../models/CaseDocument";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseDocument)
export class CreateCaseDocumentResolver {
  @TypeGraphQL.Mutation(_returns => CaseDocument, {
    nullable: false
  })
  async createCaseDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseDocumentArgs): Promise<CaseDocument> {
    return getPrismaFromContext(ctx).caseDocument.create(args);
  }
}
