import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseTransferArgs } from "./args/AggregateCaseTransferArgs";
import { CaseTransfer } from "../../../models/CaseTransfer";
import { AggregateCaseTransfer } from "../../outputs/AggregateCaseTransfer";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseTransfer)
export class AggregateCaseTransferResolver {
  @TypeGraphQL.Query(_returns => AggregateCaseTransfer, {
    nullable: false
  })
  async aggregateCaseTransfer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseTransferArgs): Promise<AggregateCaseTransfer> {
    return getPrismaFromContext(ctx).caseTransfer.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
