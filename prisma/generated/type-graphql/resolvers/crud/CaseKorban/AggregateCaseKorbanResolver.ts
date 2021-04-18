import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseKorbanArgs } from "./args/AggregateCaseKorbanArgs";
import { CaseKorban } from "../../../models/CaseKorban";
import { AggregateCaseKorban } from "../../outputs/AggregateCaseKorban";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseKorban)
export class AggregateCaseKorbanResolver {
  @TypeGraphQL.Query(_returns => AggregateCaseKorban, {
    nullable: false
  })
  async aggregateCaseKorban(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseKorbanArgs): Promise<AggregateCaseKorban> {
    return getPrismaFromContext(ctx).caseKorban.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
