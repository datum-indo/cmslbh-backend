import * as TypeGraphQL from "type-graphql";
import { CreateCaseProgressActivityLitArgs } from "./args/CreateCaseProgressActivityLitArgs";
import { CaseProgressActivityLit } from "../../../models/CaseProgressActivityLit";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivityLit)
export class CreateCaseProgressActivityLitResolver {
  @TypeGraphQL.Mutation(_returns => CaseProgressActivityLit, {
    nullable: false
  })
  async createCaseProgressActivityLit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseProgressActivityLitArgs): Promise<CaseProgressActivityLit> {
    return getPrismaFromContext(ctx).caseProgressActivityLit.create(args);
  }
}
