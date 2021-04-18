import * as TypeGraphQL from "type-graphql";
import { UpdateManyRoleArgs } from "./args/UpdateManyRoleArgs";
import { Role } from "../../../models/Role";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Role)
export class UpdateManyRoleResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyRoleArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).role.updateMany(args);
  }
}
