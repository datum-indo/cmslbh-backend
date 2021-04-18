import * as TypeGraphQL from "type-graphql";
import { DeleteUserProfileArgs } from "./args/DeleteUserProfileArgs";
import { UserProfile } from "../../../models/UserProfile";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserProfile)
export class DeleteUserProfileResolver {
  @TypeGraphQL.Mutation(_returns => UserProfile, {
    nullable: true
  })
  async deleteUserProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteUserProfileArgs): Promise<UserProfile | null> {
    return getPrismaFromContext(ctx).userProfile.delete(args);
  }
}
