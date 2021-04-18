import * as TypeGraphQL from "type-graphql";
import { DeleteManySrcOperatorArgs } from "./args/DeleteManySrcOperatorArgs";
import { SrcOperator } from "../../../models/SrcOperator";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcOperator)
export class DeleteManySrcOperatorResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySrcOperator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManySrcOperatorArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).srcOperator.deleteMany(args);
  }
}
