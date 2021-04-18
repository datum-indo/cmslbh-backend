import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRoleArgs } from "./args/AggregateRoleArgs";
import { CreateRoleArgs } from "./args/CreateRoleArgs";
import { DeleteManyRoleArgs } from "./args/DeleteManyRoleArgs";
import { DeleteRoleArgs } from "./args/DeleteRoleArgs";
import { FindFirstRoleArgs } from "./args/FindFirstRoleArgs";
import { FindManyRoleArgs } from "./args/FindManyRoleArgs";
import { FindUniqueRoleArgs } from "./args/FindUniqueRoleArgs";
import { UpdateManyRoleArgs } from "./args/UpdateManyRoleArgs";
import { UpdateRoleArgs } from "./args/UpdateRoleArgs";
import { UpsertRoleArgs } from "./args/UpsertRoleArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { Role } from "../../../models/Role";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateRole } from "../../outputs/AggregateRole";

@TypeGraphQL.Resolver(_of => Role)
export class RoleCrudResolver {
  @TypeGraphQL.Query(_returns => Role, {
    nullable: true
  })
  async role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueRoleArgs): Promise<Role | null> {
    return getPrismaFromContext(ctx).role.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Role, {
    nullable: true
  })
  async findFirstRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstRoleArgs): Promise<Role | null> {
    return getPrismaFromContext(ctx).role.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Role], {
    nullable: false
  })
  async roles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyRoleArgs): Promise<Role[]> {
    return getPrismaFromContext(ctx).role.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Role, {
    nullable: false
  })
  async createRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateRoleArgs): Promise<Role> {
    return getPrismaFromContext(ctx).role.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Role, {
    nullable: true
  })
  async deleteRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteRoleArgs): Promise<Role | null> {
    return getPrismaFromContext(ctx).role.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Role, {
    nullable: true
  })
  async updateRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateRoleArgs): Promise<Role | null> {
    return getPrismaFromContext(ctx).role.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyRoleArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).role.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyRoleArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).role.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Role, {
    nullable: false
  })
  async upsertRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertRoleArgs): Promise<Role> {
    return getPrismaFromContext(ctx).role.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateRole, {
    nullable: false
  })
  async aggregateRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRoleArgs): Promise<AggregateRole> {
    return getPrismaFromContext(ctx).role.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
