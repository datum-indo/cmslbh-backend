import * as TypeGraphQL from "type-graphql";
import { UpsertUserProfileArgs } from "./args/UpsertUserProfileArgs";
import { UserProfile } from "../../../models/UserProfile";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserProfile)
export class UpsertUserProfileResolver {
  @TypeGraphQL.Mutation(_returns => UserProfile, {
    nullable: false
  })
  async upsertUserProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertUserProfileArgs): Promise<UserProfile> {
    return getPrismaFromContext(ctx).userProfile.upsert(args);
  }
}
