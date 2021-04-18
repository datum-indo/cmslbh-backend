import * as TypeGraphQL from "type-graphql";
import { CreateRolesTypeArgs } from "./args/CreateRolesTypeArgs";
import { RolesType } from "../../../models/RolesType";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RolesType)
export class CreateRolesTypeResolver {
  @TypeGraphQL.Mutation(_returns => RolesType, {
    nullable: false
  })
  async createRolesType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateRolesTypeArgs): Promise<RolesType> {
    return getPrismaFromContext(ctx).rolesType.create(args);
  }
}
