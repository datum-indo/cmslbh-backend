import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseViolenceMethodArgs } from "./args/AggregateCaseViolenceMethodArgs";
import { CaseViolenceMethod } from "../../../models/CaseViolenceMethod";
import { AggregateCaseViolenceMethod } from "../../outputs/AggregateCaseViolenceMethod";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseViolenceMethod)
export class AggregateCaseViolenceMethodResolver {
  @TypeGraphQL.Query(_returns => AggregateCaseViolenceMethod, {
    nullable: false
  })
  async aggregateCaseViolenceMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseViolenceMethodArgs): Promise<AggregateCaseViolenceMethod> {
    return getPrismaFromContext(ctx).caseViolenceMethod.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
