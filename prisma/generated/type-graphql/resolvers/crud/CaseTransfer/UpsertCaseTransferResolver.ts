import * as TypeGraphQL from "type-graphql";
import { UpsertCaseTransferArgs } from "./args/UpsertCaseTransferArgs";
import { CaseTransfer } from "../../../models/CaseTransfer";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseTransfer)
export class UpsertCaseTransferResolver {
  @TypeGraphQL.Mutation(_returns => CaseTransfer, {
    nullable: false
  })
  async upsertCaseTransfer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseTransferArgs): Promise<CaseTransfer> {
    return getPrismaFromContext(ctx).caseTransfer.upsert(args);
  }
}
