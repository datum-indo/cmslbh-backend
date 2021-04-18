import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSrcOperatorArgs } from "./args/AggregateSrcOperatorArgs";
import { SrcOperator } from "../../../models/SrcOperator";
import { AggregateSrcOperator } from "../../outputs/AggregateSrcOperator";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcOperator)
export class AggregateSrcOperatorResolver {
  @TypeGraphQL.Query(_returns => AggregateSrcOperator, {
    nullable: false
  })
  async aggregateSrcOperator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSrcOperatorArgs): Promise<AggregateSrcOperator> {
    return getPrismaFromContext(ctx).srcOperator.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
