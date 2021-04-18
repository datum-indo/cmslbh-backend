import * as TypeGraphQL from "type-graphql";
import { DeleteCaseTransferArgs } from "./args/DeleteCaseTransferArgs";
import { CaseTransfer } from "../../../models/CaseTransfer";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseTransfer)
export class DeleteCaseTransferResolver {
  @TypeGraphQL.Mutation(_returns => CaseTransfer, {
    nullable: true
  })
  async deleteCaseTransfer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseTransferArgs): Promise<CaseTransfer | null> {
    return getPrismaFromContext(ctx).caseTransfer.delete(args);
  }
}
