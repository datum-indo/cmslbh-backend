import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateNetworkArgs } from "./args/AggregateNetworkArgs";
import { Network } from "../../../models/Network";
import { AggregateNetwork } from "../../outputs/AggregateNetwork";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Network)
export class AggregateNetworkResolver {
  @TypeGraphQL.Query(_returns => AggregateNetwork, {
    nullable: false
  })
  async aggregateNetwork(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateNetworkArgs): Promise<AggregateNetwork> {
    return getPrismaFromContext(ctx).network.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
