import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseProgressActivityNonlitArgs } from "./args/AggregateCaseProgressActivityNonlitArgs";
import { CaseProgressActivityNonlit } from "../../../models/CaseProgressActivityNonlit";
import { AggregateCaseProgressActivityNonlit } from "../../outputs/AggregateCaseProgressActivityNonlit";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivityNonlit)
export class AggregateCaseProgressActivityNonlitResolver {
  @TypeGraphQL.Query(_returns => AggregateCaseProgressActivityNonlit, {
    nullable: false
  })
  async aggregateCaseProgressActivityNonlit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseProgressActivityNonlitArgs): Promise<AggregateCaseProgressActivityNonlit> {
    return getPrismaFromContext(ctx).caseProgressActivityNonlit.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
