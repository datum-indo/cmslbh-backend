import * as TypeGraphQL from "type-graphql";
import { UpdateManyCaseDocumentArgs } from "./args/UpdateManyCaseDocumentArgs";
import { CaseDocument } from "../../../models/CaseDocument";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseDocument)
export class UpdateManyCaseDocumentResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseDocumentArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseDocument.updateMany(args);
  }
}
