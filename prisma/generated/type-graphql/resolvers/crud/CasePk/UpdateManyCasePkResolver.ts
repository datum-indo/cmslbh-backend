import * as TypeGraphQL from "type-graphql";
import { UpdateManyCasePkArgs } from "./args/UpdateManyCasePkArgs";
import { CasePk } from "../../../models/CasePk";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CasePk)
export class UpdateManyCasePkResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCasePk(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCasePkArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).casePk.updateMany(args);
  }
}
