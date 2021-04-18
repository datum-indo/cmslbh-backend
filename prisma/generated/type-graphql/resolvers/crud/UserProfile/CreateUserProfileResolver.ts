import * as TypeGraphQL from "type-graphql";
import { CreateUserProfileArgs } from "./args/CreateUserProfileArgs";
import { UserProfile } from "../../../models/UserProfile";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserProfile)
export class CreateUserProfileResolver {
  @TypeGraphQL.Mutation(_returns => UserProfile, {
    nullable: false
  })
  async createUserProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateUserProfileArgs): Promise<UserProfile> {
    return getPrismaFromContext(ctx).userProfile.create(args);
  }
}
