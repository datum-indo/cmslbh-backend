import * as TypeGraphQL from "type-graphql";
import { DeleteManyCasePelakuArgs } from "./args/DeleteManyCasePelakuArgs";
import { CasePelaku } from "../../../models/CasePelaku";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CasePelaku)
export class DeleteManyCasePelakuResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCasePelaku(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCasePelakuArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).casePelaku.deleteMany(args);
  }
}
