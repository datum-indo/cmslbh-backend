import * as TypeGraphQL from "type-graphql";
import { UpdateManyCaseProgressActivityLitArgs } from "./args/UpdateManyCaseProgressActivityLitArgs";
import { CaseProgressActivityLit } from "../../../models/CaseProgressActivityLit";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivityLit)
export class UpdateManyCaseProgressActivityLitResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseProgressActivityLit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseProgressActivityLitArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseProgressActivityLit.updateMany(args);
  }
}
