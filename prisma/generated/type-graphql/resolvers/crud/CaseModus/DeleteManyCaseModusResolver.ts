import * as TypeGraphQL from "type-graphql";
import { DeleteManyCaseModusArgs } from "./args/DeleteManyCaseModusArgs";
import { CaseModus } from "../../../models/CaseModus";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseModus)
export class DeleteManyCaseModusResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseModus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseModusArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseModus.deleteMany(args);
  }
}
