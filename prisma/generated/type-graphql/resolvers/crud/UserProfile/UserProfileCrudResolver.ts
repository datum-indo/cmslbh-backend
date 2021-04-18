import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUserProfileArgs } from "./args/AggregateUserProfileArgs";
import { CreateUserProfileArgs } from "./args/CreateUserProfileArgs";
import { DeleteManyUserProfileArgs } from "./args/DeleteManyUserProfileArgs";
import { DeleteUserProfileArgs } from "./args/DeleteUserProfileArgs";
import { FindFirstUserProfileArgs } from "./args/FindFirstUserProfileArgs";
import { FindManyUserProfileArgs } from "./args/FindManyUserProfileArgs";
import { FindUniqueUserProfileArgs } from "./args/FindUniqueUserProfileArgs";
import { UpdateManyUserProfileArgs } from "./args/UpdateManyUserProfileArgs";
import { UpdateUserProfileArgs } from "./args/UpdateUserProfileArgs";
import { UpsertUserProfileArgs } from "./args/UpsertUserProfileArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { UserProfile } from "../../../models/UserProfile";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUserProfile } from "../../outputs/AggregateUserProfile";

@TypeGraphQL.Resolver(_of => UserProfile)
export class UserProfileCrudResolver {
  @TypeGraphQL.Query(_returns => UserProfile, {
    nullable: true
  })
  async userProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueUserProfileArgs): Promise<UserProfile | null> {
    return getPrismaFromContext(ctx).userProfile.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => UserProfile, {
    nullable: true
  })
  async findFirstUserProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstUserProfileArgs): Promise<UserProfile | null> {
    return getPrismaFromContext(ctx).userProfile.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [UserProfile], {
    nullable: false
  })
  async userProfiles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyUserProfileArgs): Promise<UserProfile[]> {
    return getPrismaFromContext(ctx).userProfile.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => UserProfile, {
    nullable: false
  })
  async createUserProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateUserProfileArgs): Promise<UserProfile> {
    return getPrismaFromContext(ctx).userProfile.create(args);
  }

  @TypeGraphQL.Mutation(_returns => UserProfile, {
    nullable: true
  })
  async deleteUserProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteUserProfileArgs): Promise<UserProfile | null> {
    return getPrismaFromContext(ctx).userProfile.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => UserProfile, {
    nullable: true
  })
  async updateUserProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateUserProfileArgs): Promise<UserProfile | null> {
    return getPrismaFromContext(ctx).userProfile.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyUserProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyUserProfileArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).userProfile.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyUserProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyUserProfileArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).userProfile.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => UserProfile, {
    nullable: false
  })
  async upsertUserProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertUserProfileArgs): Promise<UserProfile> {
    return getPrismaFromContext(ctx).userProfile.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateUserProfile, {
    nullable: false
  })
  async aggregateUserProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserProfileArgs): Promise<AggregateUserProfile> {
    return getPrismaFromContext(ctx).userProfile.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
