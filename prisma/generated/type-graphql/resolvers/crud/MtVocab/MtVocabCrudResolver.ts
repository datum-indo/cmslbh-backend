import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMtVocabArgs } from "./args/AggregateMtVocabArgs";
import { CreateMtVocabArgs } from "./args/CreateMtVocabArgs";
import { DeleteManyMtVocabArgs } from "./args/DeleteManyMtVocabArgs";
import { DeleteMtVocabArgs } from "./args/DeleteMtVocabArgs";
import { FindFirstMtVocabArgs } from "./args/FindFirstMtVocabArgs";
import { FindManyMtVocabArgs } from "./args/FindManyMtVocabArgs";
import { FindUniqueMtVocabArgs } from "./args/FindUniqueMtVocabArgs";
import { UpdateManyMtVocabArgs } from "./args/UpdateManyMtVocabArgs";
import { UpdateMtVocabArgs } from "./args/UpdateMtVocabArgs";
import { UpsertMtVocabArgs } from "./args/UpsertMtVocabArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { MtVocab } from "../../../models/MtVocab";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMtVocab } from "../../outputs/AggregateMtVocab";

@TypeGraphQL.Resolver(_of => MtVocab)
export class MtVocabCrudResolver {
  @TypeGraphQL.Query(_returns => MtVocab, {
    nullable: true
  })
  async mtVocab(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueMtVocabArgs): Promise<MtVocab | null> {
    return getPrismaFromContext(ctx).mtVocab.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => MtVocab, {
    nullable: true
  })
  async findFirstMtVocab(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstMtVocabArgs): Promise<MtVocab | null> {
    return getPrismaFromContext(ctx).mtVocab.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [MtVocab], {
    nullable: false
  })
  async mtVocabs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyMtVocabArgs): Promise<MtVocab[]> {
    return getPrismaFromContext(ctx).mtVocab.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => MtVocab, {
    nullable: false
  })
  async createMtVocab(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateMtVocabArgs): Promise<MtVocab> {
    return getPrismaFromContext(ctx).mtVocab.create(args);
  }

  @TypeGraphQL.Mutation(_returns => MtVocab, {
    nullable: true
  })
  async deleteMtVocab(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteMtVocabArgs): Promise<MtVocab | null> {
    return getPrismaFromContext(ctx).mtVocab.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => MtVocab, {
    nullable: true
  })
  async updateMtVocab(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateMtVocabArgs): Promise<MtVocab | null> {
    return getPrismaFromContext(ctx).mtVocab.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMtVocab(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyMtVocabArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).mtVocab.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMtVocab(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyMtVocabArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).mtVocab.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => MtVocab, {
    nullable: false
  })
  async upsertMtVocab(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertMtVocabArgs): Promise<MtVocab> {
    return getPrismaFromContext(ctx).mtVocab.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateMtVocab, {
    nullable: false
  })
  async aggregateMtVocab(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMtVocabArgs): Promise<AggregateMtVocab> {
    return getPrismaFromContext(ctx).mtVocab.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
