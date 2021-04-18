import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseIssueArgs } from "./args/AggregateCaseIssueArgs";
import { CaseIssue } from "../../../models/CaseIssue";
import { AggregateCaseIssue } from "../../outputs/AggregateCaseIssue";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseIssue)
export class AggregateCaseIssueResolver {
  @TypeGraphQL.Query(_returns => AggregateCaseIssue, {
    nullable: false
  })
  async aggregateCaseIssue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseIssueArgs): Promise<AggregateCaseIssue> {
    return getPrismaFromContext(ctx).caseIssue.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
