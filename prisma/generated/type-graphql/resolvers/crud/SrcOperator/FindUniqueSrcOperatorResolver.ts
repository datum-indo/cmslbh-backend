import * as TypeGraphQL from "type-graphql";
import { FindUniqueSrcOperatorArgs } from "./args/FindUniqueSrcOperatorArgs";
import { SrcOperator } from "../../../models/SrcOperator";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcOperator)
export class FindUniqueSrcOperatorResolver {
  @TypeGraphQL.Query(_returns => SrcOperator, {
    nullable: true
  })
  async srcOperator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueSrcOperatorArgs): Promise<SrcOperator | null> {
    return getPrismaFromContext(ctx).srcOperator.findUnique(args);
  }
}
