import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCasePkArgs } from "./args/AggregateCasePkArgs";
import { CasePk } from "../../../models/CasePk";
import { AggregateCasePk } from "../../outputs/AggregateCasePk";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CasePk)
export class AggregateCasePkResolver {
  @TypeGraphQL.Query(_returns => AggregateCasePk, {
    nullable: false
  })
  async aggregateCasePk(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCasePkArgs): Promise<AggregateCasePk> {
    return getPrismaFromContext(ctx).casePk.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
