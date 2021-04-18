import * as TypeGraphQL from "type-graphql";
import { CreateCaseTransferArgs } from "./args/CreateCaseTransferArgs";
import { CaseTransfer } from "../../../models/CaseTransfer";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseTransfer)
export class CreateCaseTransferResolver {
  @TypeGraphQL.Mutation(_returns => CaseTransfer, {
    nullable: false
  })
  async createCaseTransfer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseTransferArgs): Promise<CaseTransfer> {
    return getPrismaFromContext(ctx).caseTransfer.create(args);
  }
}
