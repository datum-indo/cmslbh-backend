import * as TypeGraphQL from "type-graphql";
import { CreateSrcOperatorArgs } from "./args/CreateSrcOperatorArgs";
import { SrcOperator } from "../../../models/SrcOperator";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcOperator)
export class CreateSrcOperatorResolver {
  @TypeGraphQL.Mutation(_returns => SrcOperator, {
    nullable: false
  })
  async createSrcOperator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateSrcOperatorArgs): Promise<SrcOperator> {
    return getPrismaFromContext(ctx).srcOperator.create(args);
  }
}
