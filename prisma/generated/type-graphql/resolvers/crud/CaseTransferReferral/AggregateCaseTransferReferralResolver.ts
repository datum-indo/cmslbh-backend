import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseTransferReferralArgs } from "./args/AggregateCaseTransferReferralArgs";
import { CaseTransferReferral } from "../../../models/CaseTransferReferral";
import { AggregateCaseTransferReferral } from "../../outputs/AggregateCaseTransferReferral";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseTransferReferral)
export class AggregateCaseTransferReferralResolver {
  @TypeGraphQL.Query(_returns => AggregateCaseTransferReferral, {
    nullable: false
  })
  async aggregateCaseTransferReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseTransferReferralArgs): Promise<AggregateCaseTransferReferral> {
    return getPrismaFromContext(ctx).caseTransferReferral.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
