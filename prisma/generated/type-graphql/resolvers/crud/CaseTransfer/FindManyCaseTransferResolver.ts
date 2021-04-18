import * as TypeGraphQL from "type-graphql";
import { FindManyCaseTransferArgs } from "./args/FindManyCaseTransferArgs";
import { CaseTransfer } from "../../../models/CaseTransfer";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseTransfer)
export class FindManyCaseTransferResolver {
  @TypeGraphQL.Query(_returns => [CaseTransfer], {
    nullable: false
  })
  async caseTransfers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseTransferArgs): Promise<CaseTransfer[]> {
    return getPrismaFromContext(ctx).caseTransfer.findMany(args);
  }
}
