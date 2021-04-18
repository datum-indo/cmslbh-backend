import * as TypeGraphQL from "type-graphql";
import { FindFirstSrcOperatorArgs } from "./args/FindFirstSrcOperatorArgs";
import { SrcOperator } from "../../../models/SrcOperator";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcOperator)
export class FindFirstSrcOperatorResolver {
  @TypeGraphQL.Query(_returns => SrcOperator, {
    nullable: true
  })
  async findFirstSrcOperator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstSrcOperatorArgs): Promise<SrcOperator | null> {
    return getPrismaFromContext(ctx).srcOperator.findFirst(args);
  }
}
