import * as TypeGraphQL from "type-graphql";
import { UpdateManyCasePelakuArgs } from "./args/UpdateManyCasePelakuArgs";
import { CasePelaku } from "../../../models/CasePelaku";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CasePelaku)
export class UpdateManyCasePelakuResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCasePelaku(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCasePelakuArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).casePelaku.updateMany(args);
  }
}
