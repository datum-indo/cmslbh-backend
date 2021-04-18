import * as TypeGraphQL from "type-graphql";
import { DeleteManyCaseDocumentArgs } from "./args/DeleteManyCaseDocumentArgs";
import { CaseDocument } from "../../../models/CaseDocument";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseDocument)
export class DeleteManyCaseDocumentResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseDocumentArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseDocument.deleteMany(args);
  }
}
