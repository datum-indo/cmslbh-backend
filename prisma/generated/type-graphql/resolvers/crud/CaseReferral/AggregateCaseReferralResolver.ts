import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseReferralArgs } from "./args/AggregateCaseReferralArgs";
import { CaseReferral } from "../../../models/CaseReferral";
import { AggregateCaseReferral } from "../../outputs/AggregateCaseReferral";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseReferral)
export class AggregateCaseReferralResolver {
  @TypeGraphQL.Query(_returns => AggregateCaseReferral, {
    nullable: false
  })
  async aggregateCaseReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseReferralArgs): Promise<AggregateCaseReferral> {
    return getPrismaFromContext(ctx).caseReferral.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
