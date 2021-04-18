import * as TypeGraphQL from "type-graphql";
import { DeleteCaseKorbanArgs } from "./args/DeleteCaseKorbanArgs";
import { CaseKorban } from "../../../models/CaseKorban";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseKorban)
export class DeleteCaseKorbanResolver {
  @TypeGraphQL.Mutation(_returns => CaseKorban, {
    nullable: true
  })
  async deleteCaseKorban(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseKorbanArgs): Promise<CaseKorban | null> {
    return getPrismaFromContext(ctx).caseKorban.delete(args);
  }
}
