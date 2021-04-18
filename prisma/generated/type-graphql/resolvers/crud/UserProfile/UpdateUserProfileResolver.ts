import * as TypeGraphQL from "type-graphql";
import { UpdateUserProfileArgs } from "./args/UpdateUserProfileArgs";
import { UserProfile } from "../../../models/UserProfile";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserProfile)
export class UpdateUserProfileResolver {
  @TypeGraphQL.Mutation(_returns => UserProfile, {
    nullable: true
  })
  async updateUserProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateUserProfileArgs): Promise<UserProfile | null> {
    return getPrismaFromContext(ctx).userProfile.update(args);
  }
}
