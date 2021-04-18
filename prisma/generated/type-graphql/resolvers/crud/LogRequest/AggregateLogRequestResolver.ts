import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateLogRequestArgs } from "./args/AggregateLogRequestArgs";
import { LogRequest } from "../../../models/LogRequest";
import { AggregateLogRequest } from "../../outputs/AggregateLogRequest";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LogRequest)
export class AggregateLogRequestResolver {
  @TypeGraphQL.Query(_returns => AggregateLogRequest, {
    nullable: false
  })
  async aggregateLogRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLogRequestArgs): Promise<AggregateLogRequest> {
    return getPrismaFromContext(ctx).logRequest.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
