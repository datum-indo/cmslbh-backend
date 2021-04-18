import * as TypeGraphQL from "type-graphql";
import { UpsertSrcOperatorArgs } from "./args/UpsertSrcOperatorArgs";
import { SrcOperator } from "../../../models/SrcOperator";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcOperator)
export class UpsertSrcOperatorResolver {
  @TypeGraphQL.Mutation(_returns => SrcOperator, {
    nullable: false
  })
  async upsertSrcOperator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertSrcOperatorArgs): Promise<SrcOperator> {
    return getPrismaFromContext(ctx).srcOperator.upsert(args);
  }
}
