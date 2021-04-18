import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseClassificationArgs } from "./args/AggregateCaseClassificationArgs";
import { CaseClassification } from "../../../models/CaseClassification";
import { AggregateCaseClassification } from "../../outputs/AggregateCaseClassification";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseClassification)
export class AggregateCaseClassificationResolver {
  @TypeGraphQL.Query(_returns => AggregateCaseClassification, {
    nullable: false
  })
  async aggregateCaseClassification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseClassificationArgs): Promise<AggregateCaseClassification> {
    return getPrismaFromContext(ctx).caseClassification.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
