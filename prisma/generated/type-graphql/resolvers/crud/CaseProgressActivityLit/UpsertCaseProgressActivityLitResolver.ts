import * as TypeGraphQL from "type-graphql";
import { UpsertCaseProgressActivityLitArgs } from "./args/UpsertCaseProgressActivityLitArgs";
import { CaseProgressActivityLit } from "../../../models/CaseProgressActivityLit";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivityLit)
export class UpsertCaseProgressActivityLitResolver {
  @TypeGraphQL.Mutation(_returns => CaseProgressActivityLit, {
    nullable: false
  })
  async upsertCaseProgressActivityLit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseProgressActivityLitArgs): Promise<CaseProgressActivityLit> {
    return getPrismaFromContext(ctx).caseProgressActivityLit.upsert(args);
  }
}
