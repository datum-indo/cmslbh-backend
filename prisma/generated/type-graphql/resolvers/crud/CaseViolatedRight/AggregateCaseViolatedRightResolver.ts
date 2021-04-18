import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseViolatedRightArgs } from "./args/AggregateCaseViolatedRightArgs";
import { CaseViolatedRight } from "../../../models/CaseViolatedRight";
import { AggregateCaseViolatedRight } from "../../outputs/AggregateCaseViolatedRight";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseViolatedRight)
export class AggregateCaseViolatedRightResolver {
  @TypeGraphQL.Query(_returns => AggregateCaseViolatedRight, {
    nullable: false
  })
  async aggregateCaseViolatedRight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseViolatedRightArgs): Promise<AggregateCaseViolatedRight> {
    return getPrismaFromContext(ctx).caseViolatedRight.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
