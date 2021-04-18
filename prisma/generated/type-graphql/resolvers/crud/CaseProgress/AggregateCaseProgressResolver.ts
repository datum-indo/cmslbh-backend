import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseProgressArgs } from "./args/AggregateCaseProgressArgs";
import { CaseProgress } from "../../../models/CaseProgress";
import { AggregateCaseProgress } from "../../outputs/AggregateCaseProgress";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgress)
export class AggregateCaseProgressResolver {
  @TypeGraphQL.Query(_returns => AggregateCaseProgress, {
    nullable: false
  })
  async aggregateCaseProgress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseProgressArgs): Promise<AggregateCaseProgress> {
    return getPrismaFromContext(ctx).caseProgress.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
