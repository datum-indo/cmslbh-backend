import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSrcAnalisaArgs } from "./args/AggregateSrcAnalisaArgs";
import { CreateSrcAnalisaArgs } from "./args/CreateSrcAnalisaArgs";
import { DeleteManySrcAnalisaArgs } from "./args/DeleteManySrcAnalisaArgs";
import { DeleteSrcAnalisaArgs } from "./args/DeleteSrcAnalisaArgs";
import { FindFirstSrcAnalisaArgs } from "./args/FindFirstSrcAnalisaArgs";
import { FindManySrcAnalisaArgs } from "./args/FindManySrcAnalisaArgs";
import { FindUniqueSrcAnalisaArgs } from "./args/FindUniqueSrcAnalisaArgs";
import { UpdateManySrcAnalisaArgs } from "./args/UpdateManySrcAnalisaArgs";
import { UpdateSrcAnalisaArgs } from "./args/UpdateSrcAnalisaArgs";
import { UpsertSrcAnalisaArgs } from "./args/UpsertSrcAnalisaArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { SrcAnalisa } from "../../../models/SrcAnalisa";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSrcAnalisa } from "../../outputs/AggregateSrcAnalisa";

@TypeGraphQL.Resolver(_of => SrcAnalisa)
export class SrcAnalisaCrudResolver {
  @TypeGraphQL.Query(_returns => SrcAnalisa, {
    nullable: true
  })
  async srcAnalisa(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueSrcAnalisaArgs): Promise<SrcAnalisa | null> {
    return getPrismaFromContext(ctx).srcAnalisa.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => SrcAnalisa, {
    nullable: true
  })
  async findFirstSrcAnalisa(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstSrcAnalisaArgs): Promise<SrcAnalisa | null> {
    return getPrismaFromContext(ctx).srcAnalisa.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [SrcAnalisa], {
    nullable: false
  })
  async srcAnalisas(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManySrcAnalisaArgs): Promise<SrcAnalisa[]> {
    return getPrismaFromContext(ctx).srcAnalisa.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => SrcAnalisa, {
    nullable: false
  })
  async createSrcAnalisa(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateSrcAnalisaArgs): Promise<SrcAnalisa> {
    return getPrismaFromContext(ctx).srcAnalisa.create(args);
  }

  @TypeGraphQL.Mutation(_returns => SrcAnalisa, {
    nullable: true
  })
  async deleteSrcAnalisa(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteSrcAnalisaArgs): Promise<SrcAnalisa | null> {
    return getPrismaFromContext(ctx).srcAnalisa.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => SrcAnalisa, {
    nullable: true
  })
  async updateSrcAnalisa(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateSrcAnalisaArgs): Promise<SrcAnalisa | null> {
    return getPrismaFromContext(ctx).srcAnalisa.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySrcAnalisa(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManySrcAnalisaArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).srcAnalisa.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySrcAnalisa(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManySrcAnalisaArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).srcAnalisa.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => SrcAnalisa, {
    nullable: false
  })
  async upsertSrcAnalisa(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertSrcAnalisaArgs): Promise<SrcAnalisa> {
    return getPrismaFromContext(ctx).srcAnalisa.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateSrcAnalisa, {
    nullable: false
  })
  async aggregateSrcAnalisa(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSrcAnalisaArgs): Promise<AggregateSrcAnalisa> {
    return getPrismaFromContext(ctx).srcAnalisa.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
