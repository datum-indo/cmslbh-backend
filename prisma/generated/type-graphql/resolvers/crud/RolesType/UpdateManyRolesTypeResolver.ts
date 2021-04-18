import * as TypeGraphQL from "type-graphql";
import { UpdateManyRolesTypeArgs } from "./args/UpdateManyRolesTypeArgs";
import { RolesType } from "../../../models/RolesType";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RolesType)
export class UpdateManyRolesTypeResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyRolesType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyRolesTypeArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).rolesType.updateMany(args);
  }
}
