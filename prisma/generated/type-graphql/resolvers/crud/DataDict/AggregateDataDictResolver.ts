import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDataDictArgs } from "./args/AggregateDataDictArgs";
import { DataDict } from "../../../models/DataDict";
import { AggregateDataDict } from "../../outputs/AggregateDataDict";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DataDict)
export class AggregateDataDictResolver {
  @TypeGraphQL.Query(_returns => AggregateDataDict, {
    nullable: false
  })
  async aggregateDataDict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDataDictArgs): Promise<AggregateDataDict> {
    return getPrismaFromContext(ctx).dataDict.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
