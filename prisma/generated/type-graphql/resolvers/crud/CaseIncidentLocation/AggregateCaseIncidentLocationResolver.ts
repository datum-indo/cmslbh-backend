import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseIncidentLocationArgs } from "./args/AggregateCaseIncidentLocationArgs";
import { CaseIncidentLocation } from "../../../models/CaseIncidentLocation";
import { AggregateCaseIncidentLocation } from "../../outputs/AggregateCaseIncidentLocation";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseIncidentLocation)
export class AggregateCaseIncidentLocationResolver {
  @TypeGraphQL.Query(_returns => AggregateCaseIncidentLocation, {
    nullable: false
  })
  async aggregateCaseIncidentLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseIncidentLocationArgs): Promise<AggregateCaseIncidentLocation> {
    return getPrismaFromContext(ctx).caseIncidentLocation.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
