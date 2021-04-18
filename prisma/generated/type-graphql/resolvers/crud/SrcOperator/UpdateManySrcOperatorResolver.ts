import * as TypeGraphQL from "type-graphql";
import { UpdateManySrcOperatorArgs } from "./args/UpdateManySrcOperatorArgs";
import { SrcOperator } from "../../../models/SrcOperator";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcOperator)
export class UpdateManySrcOperatorResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySrcOperator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManySrcOperatorArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).srcOperator.updateMany(args);
  }
}
