import * as TypeGraphQL from "type-graphql";
import { FindManySrcOperatorArgs } from "./args/FindManySrcOperatorArgs";
import { SrcOperator } from "../../../models/SrcOperator";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcOperator)
export class FindManySrcOperatorResolver {
  @TypeGraphQL.Query(_returns => [SrcOperator], {
    nullable: false
  })
  async srcOperators(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManySrcOperatorArgs): Promise<SrcOperator[]> {
    return getPrismaFromContext(ctx).srcOperator.findMany(args);
  }
}
