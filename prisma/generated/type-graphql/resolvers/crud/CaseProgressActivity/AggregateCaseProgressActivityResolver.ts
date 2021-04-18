import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseProgressActivityArgs } from "./args/AggregateCaseProgressActivityArgs";
import { CaseProgressActivity } from "../../../models/CaseProgressActivity";
import { AggregateCaseProgressActivity } from "../../outputs/AggregateCaseProgressActivity";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivity)
export class AggregateCaseProgressActivityResolver {
  @TypeGraphQL.Query(_returns => AggregateCaseProgressActivity, {
    nullable: false
  })
  async aggregateCaseProgressActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseProgressActivityArgs): Promise<AggregateCaseProgressActivity> {
    return getPrismaFromContext(ctx).caseProgressActivity.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
