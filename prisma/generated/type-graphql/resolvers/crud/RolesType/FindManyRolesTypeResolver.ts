import * as TypeGraphQL from "type-graphql";
import { FindManyRolesTypeArgs } from "./args/FindManyRolesTypeArgs";
import { RolesType } from "../../../models/RolesType";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RolesType)
export class FindManyRolesTypeResolver {
  @TypeGraphQL.Query(_returns => [RolesType], {
    nullable: false
  })
  async rolesTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyRolesTypeArgs): Promise<RolesType[]> {
    return getPrismaFromContext(ctx).rolesType.findMany(args);
  }
}
