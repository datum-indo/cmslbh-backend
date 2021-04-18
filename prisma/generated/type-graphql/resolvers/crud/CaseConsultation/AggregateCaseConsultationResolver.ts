import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseConsultationArgs } from "./args/AggregateCaseConsultationArgs";
import { CaseConsultation } from "../../../models/CaseConsultation";
import { AggregateCaseConsultation } from "../../outputs/AggregateCaseConsultation";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseConsultation)
export class AggregateCaseConsultationResolver {
  @TypeGraphQL.Query(_returns => AggregateCaseConsultation, {
    nullable: false
  })
  async aggregateCaseConsultation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseConsultationArgs): Promise<AggregateCaseConsultation> {
    return getPrismaFromContext(ctx).caseConsultation.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
