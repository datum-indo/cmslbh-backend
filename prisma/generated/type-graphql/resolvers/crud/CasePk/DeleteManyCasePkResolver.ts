import * as TypeGraphQL from "type-graphql";
import { DeleteManyCasePkArgs } from "./args/DeleteManyCasePkArgs";
import { CasePk } from "../../../models/CasePk";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CasePk)
export class DeleteManyCasePkResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCasePk(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCasePkArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).casePk.deleteMany(args);
  }
}
