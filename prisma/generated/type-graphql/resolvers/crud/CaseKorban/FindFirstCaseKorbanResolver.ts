import * as TypeGraphQL from "type-graphql";
import { FindFirstCaseKorbanArgs } from "./args/FindFirstCaseKorbanArgs";
import { CaseKorban } from "../../../models/CaseKorban";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseKorban)
export class FindFirstCaseKorbanResolver {
  @TypeGraphQL.Query(_returns => CaseKorban, {
    nullable: true
  })
  async findFirstCaseKorban(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseKorbanArgs): Promise<CaseKorban | null> {
    return getPrismaFromContext(ctx).caseKorban.findFirst(args);
  }
}
