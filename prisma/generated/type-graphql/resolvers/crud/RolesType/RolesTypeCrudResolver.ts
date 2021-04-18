import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRolesTypeArgs } from "./args/AggregateRolesTypeArgs";
import { CreateRolesTypeArgs } from "./args/CreateRolesTypeArgs";
import { DeleteManyRolesTypeArgs } from "./args/DeleteManyRolesTypeArgs";
import { DeleteRolesTypeArgs } from "./args/DeleteRolesTypeArgs";
import { FindFirstRolesTypeArgs } from "./args/FindFirstRolesTypeArgs";
import { FindManyRolesTypeArgs } from "./args/FindManyRolesTypeArgs";
import { FindUniqueRolesTypeArgs } from "./args/FindUniqueRolesTypeArgs";
import { UpdateManyRolesTypeArgs } from "./args/UpdateManyRolesTypeArgs";
import { UpdateRolesTypeArgs } from "./args/UpdateRolesTypeArgs";
import { UpsertRolesTypeArgs } from "./args/UpsertRolesTypeArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { RolesType } from "../../../models/RolesType";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateRolesType } from "../../outputs/AggregateRolesType";

@TypeGraphQL.Resolver(_of => RolesType)
export class RolesTypeCrudResolver {
  @TypeGraphQL.Query(_returns => RolesType, {
    nullable: true
  })
  async rolesType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueRolesTypeArgs): Promise<RolesType | null> {
    return getPrismaFromContext(ctx).rolesType.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => RolesType, {
    nullable: true
  })
  async findFirstRolesType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstRolesTypeArgs): Promise<RolesType | null> {
    return getPrismaFromContext(ctx).rolesType.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [RolesType], {
    nullable: false
  })
  async rolesTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyRolesTypeArgs): Promise<RolesType[]> {
    return getPrismaFromContext(ctx).rolesType.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => RolesType, {
    nullable: false
  })
  async createRolesType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateRolesTypeArgs): Promise<RolesType> {
    return getPrismaFromContext(ctx).rolesType.create(args);
  }

  @TypeGraphQL.Mutation(_returns => RolesType, {
    nullable: true
  })
  async deleteRolesType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteRolesTypeArgs): Promise<RolesType | null> {
    return getPrismaFromContext(ctx).rolesType.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => RolesType, {
    nullable: true
  })
  async updateRolesType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateRolesTypeArgs): Promise<RolesType | null> {
    return getPrismaFromContext(ctx).rolesType.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyRolesType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyRolesTypeArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).rolesType.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyRolesType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyRolesTypeArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).rolesType.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => RolesType, {
    nullable: false
  })
  async upsertRolesType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertRolesTypeArgs): Promise<RolesType> {
    return getPrismaFromContext(ctx).rolesType.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateRolesType, {
    nullable: false
  })
  async aggregateRolesType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRolesTypeArgs): Promise<AggregateRolesType> {
    return getPrismaFromContext(ctx).rolesType.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
