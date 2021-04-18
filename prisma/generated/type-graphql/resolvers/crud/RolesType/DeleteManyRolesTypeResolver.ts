import * as TypeGraphQL from "type-graphql";
import { DeleteManyRolesTypeArgs } from "./args/DeleteManyRolesTypeArgs";
import { RolesType } from "../../../models/RolesType";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RolesType)
export class DeleteManyRolesTypeResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyRolesType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyRolesTypeArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).rolesType.deleteMany(args);
  }
}
