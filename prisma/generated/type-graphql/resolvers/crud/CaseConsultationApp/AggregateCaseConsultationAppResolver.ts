import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseConsultationAppArgs } from "./args/AggregateCaseConsultationAppArgs";
import { CaseConsultationApp } from "../../../models/CaseConsultationApp";
import { AggregateCaseConsultationApp } from "../../outputs/AggregateCaseConsultationApp";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseConsultationApp)
export class AggregateCaseConsultationAppResolver {
  @TypeGraphQL.Query(_returns => AggregateCaseConsultationApp, {
    nullable: false
  })
  async aggregateCaseConsultationApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseConsultationAppArgs): Promise<AggregateCaseConsultationApp> {
    return getPrismaFromContext(ctx).caseConsultationApp.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
