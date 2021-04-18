import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseModusArgs } from "./args/AggregateCaseModusArgs";
import { CaseModus } from "../../../models/CaseModus";
import { AggregateCaseModus } from "../../outputs/AggregateCaseModus";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseModus)
export class AggregateCaseModusResolver {
  @TypeGraphQL.Query(_returns => AggregateCaseModus, {
    nullable: false
  })
  async aggregateCaseModus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseModusArgs): Promise<AggregateCaseModus> {
    return getPrismaFromContext(ctx).caseModus.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
