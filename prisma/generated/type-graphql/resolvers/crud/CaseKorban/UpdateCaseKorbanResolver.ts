import * as TypeGraphQL from "type-graphql";
import { UpdateCaseKorbanArgs } from "./args/UpdateCaseKorbanArgs";
import { CaseKorban } from "../../../models/CaseKorban";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseKorban)
export class UpdateCaseKorbanResolver {
  @TypeGraphQL.Mutation(_returns => CaseKorban, {
    nullable: true
  })
  async updateCaseKorban(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseKorbanArgs): Promise<CaseKorban | null> {
    return getPrismaFromContext(ctx).caseKorban.update(args);
  }
}
