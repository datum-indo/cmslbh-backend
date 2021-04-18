import * as TypeGraphQL from "type-graphql";
import { DeleteSrcOperatorArgs } from "./args/DeleteSrcOperatorArgs";
import { SrcOperator } from "../../../models/SrcOperator";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcOperator)
export class DeleteSrcOperatorResolver {
  @TypeGraphQL.Mutation(_returns => SrcOperator, {
    nullable: true
  })
  async deleteSrcOperator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteSrcOperatorArgs): Promise<SrcOperator | null> {
    return getPrismaFromContext(ctx).srcOperator.delete(args);
  }
}
