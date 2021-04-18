import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRenamedcaseArgs } from "./args/AggregateRenamedcaseArgs";
import { CreateRenamedcaseArgs } from "./args/CreateRenamedcaseArgs";
import { DeleteManyRenamedcaseArgs } from "./args/DeleteManyRenamedcaseArgs";
import { DeleteRenamedcaseArgs } from "./args/DeleteRenamedcaseArgs";
import { FindFirstRenamedcaseArgs } from "./args/FindFirstRenamedcaseArgs";
import { FindManyRenamedcaseArgs } from "./args/FindManyRenamedcaseArgs";
import { FindUniqueRenamedcaseArgs } from "./args/FindUniqueRenamedcaseArgs";
import { UpdateManyRenamedcaseArgs } from "./args/UpdateManyRenamedcaseArgs";
import { UpdateRenamedcaseArgs } from "./args/UpdateRenamedcaseArgs";
import { UpsertRenamedcaseArgs } from "./args/UpsertRenamedcaseArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { Renamedcase } from "../../../models/Renamedcase";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateRenamedcase } from "../../outputs/AggregateRenamedcase";

@TypeGraphQL.Resolver(_of => Renamedcase)
export class RenamedcaseCrudResolver {
  @TypeGraphQL.Query(_returns => Renamedcase, {
    nullable: true
  })
  async renamedcase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueRenamedcaseArgs): Promise<Renamedcase | null> {
    return getPrismaFromContext(ctx).renamedcase.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Renamedcase, {
    nullable: true
  })
  async findFirstRenamedcase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstRenamedcaseArgs): Promise<Renamedcase | null> {
    return getPrismaFromContext(ctx).renamedcase.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Renamedcase], {
    nullable: false
  })
  async renamedcases(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyRenamedcaseArgs): Promise<Renamedcase[]> {
    return getPrismaFromContext(ctx).renamedcase.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Renamedcase, {
    nullable: false
  })
  async createRenamedcase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateRenamedcaseArgs): Promise<Renamedcase> {
    return getPrismaFromContext(ctx).renamedcase.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Renamedcase, {
    nullable: true
  })
  async deleteRenamedcase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteRenamedcaseArgs): Promise<Renamedcase | null> {
    return getPrismaFromContext(ctx).renamedcase.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Renamedcase, {
    nullable: true
  })
  async updateRenamedcase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateRenamedcaseArgs): Promise<Renamedcase | null> {
    return getPrismaFromContext(ctx).renamedcase.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyRenamedcase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyRenamedcaseArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).renamedcase.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyRenamedcase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyRenamedcaseArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).renamedcase.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Renamedcase, {
    nullable: false
  })
  async upsertRenamedcase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertRenamedcaseArgs): Promise<Renamedcase> {
    return getPrismaFromContext(ctx).renamedcase.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateRenamedcase, {
    nullable: false
  })
  async aggregateRenamedcase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRenamedcaseArgs): Promise<AggregateRenamedcase> {
    return getPrismaFromContext(ctx).renamedcase.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
