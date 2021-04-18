import * as TypeGraphQL from "type-graphql";
import { FindFirstCaseTransferArgs } from "./args/FindFirstCaseTransferArgs";
import { CaseTransfer } from "../../../models/CaseTransfer";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseTransfer)
export class FindFirstCaseTransferResolver {
  @TypeGraphQL.Query(_returns => CaseTransfer, {
    nullable: true
  })
  async findFirstCaseTransfer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseTransferArgs): Promise<CaseTransfer | null> {
    return getPrismaFromContext(ctx).caseTransfer.findFirst(args);
  }
}
