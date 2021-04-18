import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseCategoryArgs } from "./args/AggregateCaseCategoryArgs";
import { CaseCategory } from "../../../models/CaseCategory";
import { AggregateCaseCategory } from "../../outputs/AggregateCaseCategory";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseCategory)
export class AggregateCaseCategoryResolver {
  @TypeGraphQL.Query(_returns => AggregateCaseCategory, {
    nullable: false
  })
  async aggregateCaseCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseCategoryArgs): Promise<AggregateCaseCategory> {
    return getPrismaFromContext(ctx).caseCategory.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
