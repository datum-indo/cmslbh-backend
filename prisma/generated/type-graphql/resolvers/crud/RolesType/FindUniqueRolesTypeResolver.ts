import * as TypeGraphQL from "type-graphql";
import { FindUniqueRolesTypeArgs } from "./args/FindUniqueRolesTypeArgs";
import { RolesType } from "../../../models/RolesType";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RolesType)
export class FindUniqueRolesTypeResolver {
  @TypeGraphQL.Query(_returns => RolesType, {
    nullable: true
  })
  async rolesType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueRolesTypeArgs): Promise<RolesType | null> {
    return getPrismaFromContext(ctx).rolesType.findUnique(args);
  }
}
