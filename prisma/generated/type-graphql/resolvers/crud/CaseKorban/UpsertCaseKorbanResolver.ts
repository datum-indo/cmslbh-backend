import * as TypeGraphQL from "type-graphql";
import { UpsertCaseKorbanArgs } from "./args/UpsertCaseKorbanArgs";
import { CaseKorban } from "../../../models/CaseKorban";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseKorban)
export class UpsertCaseKorbanResolver {
  @TypeGraphQL.Mutation(_returns => CaseKorban, {
    nullable: false
  })
  async upsertCaseKorban(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseKorbanArgs): Promise<CaseKorban> {
    return getPrismaFromContext(ctx).caseKorban.upsert(args);
  }
}
