import * as TypeGraphQL from "type-graphql";
import { FindManyUserProfileArgs } from "./args/FindManyUserProfileArgs";
import { UserProfile } from "../../../models/UserProfile";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserProfile)
export class FindManyUserProfileResolver {
  @TypeGraphQL.Query(_returns => [UserProfile], {
    nullable: false
  })
  async userProfiles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyUserProfileArgs): Promise<UserProfile[]> {
    return getPrismaFromContext(ctx).userProfile.findMany(args);
  }
}
