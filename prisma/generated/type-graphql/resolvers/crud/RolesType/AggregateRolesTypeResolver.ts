import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRolesTypeArgs } from "./args/AggregateRolesTypeArgs";
import { RolesType } from "../../../models/RolesType";
import { AggregateRolesType } from "../../outputs/AggregateRolesType";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RolesType)
export class AggregateRolesTypeResolver {
  @TypeGraphQL.Query(_returns => AggregateRolesType, {
    nullable: false
  })
  async aggregateRolesType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRolesTypeArgs): Promise<AggregateRolesType> {
    return getPrismaFromContext(ctx).rolesType.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
