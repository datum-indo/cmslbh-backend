import * as TypeGraphQL from "type-graphql";
import { FindFirstUserProfileArgs } from "./args/FindFirstUserProfileArgs";
import { UserProfile } from "../../../models/UserProfile";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserProfile)
export class FindFirstUserProfileResolver {
  @TypeGraphQL.Query(_returns => UserProfile, {
    nullable: true
  })
  async findFirstUserProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstUserProfileArgs): Promise<UserProfile | null> {
    return getPrismaFromContext(ctx).userProfile.findFirst(args);
  }
}
