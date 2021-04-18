import * as TypeGraphQL from "type-graphql";
import { CreateCaseKorbanArgs } from "./args/CreateCaseKorbanArgs";
import { CaseKorban } from "../../../models/CaseKorban";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseKorban)
export class CreateCaseKorbanResolver {
  @TypeGraphQL.Mutation(_returns => CaseKorban, {
    nullable: false
  })
  async createCaseKorban(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseKorbanArgs): Promise<CaseKorban> {
    return getPrismaFromContext(ctx).caseKorban.create(args);
  }
}
