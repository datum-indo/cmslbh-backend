import * as TypeGraphQL from "type-graphql";
import { FindFirstRolesTypeArgs } from "./args/FindFirstRolesTypeArgs";
import { RolesType } from "../../../models/RolesType";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RolesType)
export class FindFirstRolesTypeResolver {
  @TypeGraphQL.Query(_returns => RolesType, {
    nullable: true
  })
  async findFirstRolesType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstRolesTypeArgs): Promise<RolesType | null> {
    return getPrismaFromContext(ctx).rolesType.findFirst(args);
  }
}
