import * as TypeGraphQL from "type-graphql";
import { UpsertRolesTypeArgs } from "./args/UpsertRolesTypeArgs";
import { RolesType } from "../../../models/RolesType";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RolesType)
export class UpsertRolesTypeResolver {
  @TypeGraphQL.Mutation(_returns => RolesType, {
    nullable: false
  })
  async upsertRolesType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertRolesTypeArgs): Promise<RolesType> {
    return getPrismaFromContext(ctx).rolesType.upsert(args);
  }
}
