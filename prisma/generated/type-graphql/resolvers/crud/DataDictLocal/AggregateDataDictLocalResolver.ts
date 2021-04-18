import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDataDictLocalArgs } from "./args/AggregateDataDictLocalArgs";
import { DataDictLocal } from "../../../models/DataDictLocal";
import { AggregateDataDictLocal } from "../../outputs/AggregateDataDictLocal";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DataDictLocal)
export class AggregateDataDictLocalResolver {
  @TypeGraphQL.Query(_returns => AggregateDataDictLocal, {
    nullable: false
  })
  async aggregateDataDictLocal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDataDictLocalArgs): Promise<AggregateDataDictLocal> {
    return getPrismaFromContext(ctx).dataDictLocal.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
