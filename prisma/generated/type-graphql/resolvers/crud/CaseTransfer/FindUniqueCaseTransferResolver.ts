import * as TypeGraphQL from "type-graphql";
import { FindUniqueCaseTransferArgs } from "./args/FindUniqueCaseTransferArgs";
import { CaseTransfer } from "../../../models/CaseTransfer";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseTransfer)
export class FindUniqueCaseTransferResolver {
  @TypeGraphQL.Query(_returns => CaseTransfer, {
    nullable: true
  })
  async caseTransfer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseTransferArgs): Promise<CaseTransfer | null> {
    return getPrismaFromContext(ctx).caseTransfer.findUnique(args);
  }
}
