import * as TypeGraphQL from "type-graphql";
import { UpdateManyCaseTransferArgs } from "./args/UpdateManyCaseTransferArgs";
import { CaseTransfer } from "../../../models/CaseTransfer";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseTransfer)
export class UpdateManyCaseTransferResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseTransfer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseTransferArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseTransfer.updateMany(args);
  }
}
