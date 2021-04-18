import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateLogRequestAppArgs } from "./args/AggregateLogRequestAppArgs";
import { LogRequestApp } from "../../../models/LogRequestApp";
import { AggregateLogRequestApp } from "../../outputs/AggregateLogRequestApp";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LogRequestApp)
export class AggregateLogRequestAppResolver {
  @TypeGraphQL.Query(_returns => AggregateLogRequestApp, {
    nullable: false
  })
  async aggregateLogRequestApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLogRequestAppArgs): Promise<AggregateLogRequestApp> {
    return getPrismaFromContext(ctx).logRequestApp.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
