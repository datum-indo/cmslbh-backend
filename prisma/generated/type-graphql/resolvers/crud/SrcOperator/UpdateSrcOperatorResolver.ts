import * as TypeGraphQL from "type-graphql";
import { UpdateSrcOperatorArgs } from "./args/UpdateSrcOperatorArgs";
import { SrcOperator } from "../../../models/SrcOperator";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcOperator)
export class UpdateSrcOperatorResolver {
  @TypeGraphQL.Mutation(_returns => SrcOperator, {
    nullable: true
  })
  async updateSrcOperator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateSrcOperatorArgs): Promise<SrcOperator | null> {
    return getPrismaFromContext(ctx).srcOperator.update(args);
  }
}
