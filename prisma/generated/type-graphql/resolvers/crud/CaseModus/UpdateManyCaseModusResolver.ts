import * as TypeGraphQL from "type-graphql";
import { UpdateManyCaseModusArgs } from "./args/UpdateManyCaseModusArgs";
import { CaseModus } from "../../../models/CaseModus";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseModus)
export class UpdateManyCaseModusResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseModus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseModusArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseModus.updateMany(args);
  }
}
