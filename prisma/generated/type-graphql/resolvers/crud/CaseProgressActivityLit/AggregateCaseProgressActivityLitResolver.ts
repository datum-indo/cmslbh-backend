import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseProgressActivityLitArgs } from "./args/AggregateCaseProgressActivityLitArgs";
import { CaseProgressActivityLit } from "../../../models/CaseProgressActivityLit";
import { AggregateCaseProgressActivityLit } from "../../outputs/AggregateCaseProgressActivityLit";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivityLit)
export class AggregateCaseProgressActivityLitResolver {
  @TypeGraphQL.Query(_returns => AggregateCaseProgressActivityLit, {
    nullable: false
  })
  async aggregateCaseProgressActivityLit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseProgressActivityLitArgs): Promise<AggregateCaseProgressActivityLit> {
    return getPrismaFromContext(ctx).caseProgressActivityLit.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
