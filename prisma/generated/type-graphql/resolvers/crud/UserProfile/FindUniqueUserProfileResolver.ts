import * as TypeGraphQL from "type-graphql";
import { FindUniqueUserProfileArgs } from "./args/FindUniqueUserProfileArgs";
import { UserProfile } from "../../../models/UserProfile";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserProfile)
export class FindUniqueUserProfileResolver {
  @TypeGraphQL.Query(_returns => UserProfile, {
    nullable: true
  })
  async userProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueUserProfileArgs): Promise<UserProfile | null> {
    return getPrismaFromContext(ctx).userProfile.findUnique(args);
  }
}
