import * as TypeGraphQL from "type-graphql";
import { DeleteManyCaseTransferArgs } from "./args/DeleteManyCaseTransferArgs";
import { CaseTransfer } from "../../../models/CaseTransfer";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseTransfer)
export class DeleteManyCaseTransferResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseTransfer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseTransferArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseTransfer.deleteMany(args);
  }
}
