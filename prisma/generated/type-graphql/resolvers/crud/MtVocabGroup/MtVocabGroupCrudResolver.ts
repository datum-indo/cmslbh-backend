import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMtVocabGroupArgs } from "./args/AggregateMtVocabGroupArgs";
import { CreateMtVocabGroupArgs } from "./args/CreateMtVocabGroupArgs";
import { DeleteManyMtVocabGroupArgs } from "./args/DeleteManyMtVocabGroupArgs";
import { DeleteMtVocabGroupArgs } from "./args/DeleteMtVocabGroupArgs";
import { FindFirstMtVocabGroupArgs } from "./args/FindFirstMtVocabGroupArgs";
import { FindManyMtVocabGroupArgs } from "./args/FindManyMtVocabGroupArgs";
import { FindUniqueMtVocabGroupArgs } from "./args/FindUniqueMtVocabGroupArgs";
import { UpdateManyMtVocabGroupArgs } from "./args/UpdateManyMtVocabGroupArgs";
import { UpdateMtVocabGroupArgs } from "./args/UpdateMtVocabGroupArgs";
import { UpsertMtVocabGroupArgs } from "./args/UpsertMtVocabGroupArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { MtVocabGroup } from "../../../models/MtVocabGroup";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMtVocabGroup } from "../../outputs/AggregateMtVocabGroup";

@TypeGraphQL.Resolver(_of => MtVocabGroup)
export class MtVocabGroupCrudResolver {
  @TypeGraphQL.Query(_returns => MtVocabGroup, {
    nullable: true
  })
  async mtVocabGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueMtVocabGroupArgs): Promise<MtVocabGroup | null> {
    return getPrismaFromContext(ctx).mtVocabGroup.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => MtVocabGroup, {
    nullable: true
  })
  async findFirstMtVocabGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstMtVocabGroupArgs): Promise<MtVocabGroup | null> {
    return getPrismaFromContext(ctx).mtVocabGroup.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [MtVocabGroup], {
    nullable: false
  })
  async mtVocabGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyMtVocabGroupArgs): Promise<MtVocabGroup[]> {
    return getPrismaFromContext(ctx).mtVocabGroup.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => MtVocabGroup, {
    nullable: false
  })
  async createMtVocabGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateMtVocabGroupArgs): Promise<MtVocabGroup> {
    return getPrismaFromContext(ctx).mtVocabGroup.create(args);
  }

  @TypeGraphQL.Mutation(_returns => MtVocabGroup, {
    nullable: true
  })
  async deleteMtVocabGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteMtVocabGroupArgs): Promise<MtVocabGroup | null> {
    return getPrismaFromContext(ctx).mtVocabGroup.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => MtVocabGroup, {
    nullable: true
  })
  async updateMtVocabGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateMtVocabGroupArgs): Promise<MtVocabGroup | null> {
    return getPrismaFromContext(ctx).mtVocabGroup.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMtVocabGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyMtVocabGroupArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).mtVocabGroup.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMtVocabGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyMtVocabGroupArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).mtVocabGroup.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => MtVocabGroup, {
    nullable: false
  })
  async upsertMtVocabGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertMtVocabGroupArgs): Promise<MtVocabGroup> {
    return getPrismaFromContext(ctx).mtVocabGroup.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateMtVocabGroup, {
    nullable: false
  })
  async aggregateMtVocabGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMtVocabGroupArgs): Promise<AggregateMtVocabGroup> {
    return getPrismaFromContext(ctx).mtVocabGroup.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
