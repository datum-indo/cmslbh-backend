import * as TypeGraphQL from "type-graphql";
import { FindUniqueCaseKorbanArgs } from "./args/FindUniqueCaseKorbanArgs";
import { CaseKorban } from "../../../models/CaseKorban";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseKorban)
export class FindUniqueCaseKorbanResolver {
  @TypeGraphQL.Query(_returns => CaseKorban, {
    nullable: true
  })
  async caseKorban(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseKorbanArgs): Promise<CaseKorban | null> {
    return getPrismaFromContext(ctx).caseKorban.findUnique(args);
  }
}
