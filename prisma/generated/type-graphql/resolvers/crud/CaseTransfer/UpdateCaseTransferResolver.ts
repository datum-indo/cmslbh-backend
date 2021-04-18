import * as TypeGraphQL from "type-graphql";
import { UpdateCaseTransferArgs } from "./args/UpdateCaseTransferArgs";
import { CaseTransfer } from "../../../models/CaseTransfer";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseTransfer)
export class UpdateCaseTransferResolver {
  @TypeGraphQL.Mutation(_returns => CaseTransfer, {
    nullable: true
  })
  async updateCaseTransfer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseTransferArgs): Promise<CaseTransfer | null> {
    return getPrismaFromContext(ctx).caseTransfer.update(args);
  }
}
