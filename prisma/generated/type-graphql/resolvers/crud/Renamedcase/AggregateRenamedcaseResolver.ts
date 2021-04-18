import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRenamedcaseArgs } from "./args/AggregateRenamedcaseArgs";
import { Renamedcase } from "../../../models/Renamedcase";
import { AggregateRenamedcase } from "../../outputs/AggregateRenamedcase";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Renamedcase)
export class AggregateRenamedcaseResolver {
  @TypeGraphQL.Query(_returns => AggregateRenamedcase, {
    nullable: false
  })
  async aggregateRenamedcase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRenamedcaseArgs): Promise<AggregateRenamedcase> {
    return getPrismaFromContext(ctx).renamedcase.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
