import * as TypeGraphQL from "type-graphql";
import { DeleteManyRoleArgs } from "./args/DeleteManyRoleArgs";
import { Role } from "../../../models/Role";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Role)
export class DeleteManyRoleResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyRoleArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).role.deleteMany(args);
  }
}
