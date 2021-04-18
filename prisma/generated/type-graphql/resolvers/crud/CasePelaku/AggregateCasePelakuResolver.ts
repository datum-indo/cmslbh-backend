import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCasePelakuArgs } from "./args/AggregateCasePelakuArgs";
import { CasePelaku } from "../../../models/CasePelaku";
import { AggregateCasePelaku } from "../../outputs/AggregateCasePelaku";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CasePelaku)
export class AggregateCasePelakuResolver {
  @TypeGraphQL.Query(_returns => AggregateCasePelaku, {
    nullable: false
  })
  async aggregateCasePelaku(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCasePelakuArgs): Promise<AggregateCasePelaku> {
    return getPrismaFromContext(ctx).casePelaku.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
