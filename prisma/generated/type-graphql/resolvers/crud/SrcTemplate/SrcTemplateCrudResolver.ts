import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSrcTemplateArgs } from "./args/AggregateSrcTemplateArgs";
import { CreateSrcTemplateArgs } from "./args/CreateSrcTemplateArgs";
import { DeleteManySrcTemplateArgs } from "./args/DeleteManySrcTemplateArgs";
import { DeleteSrcTemplateArgs } from "./args/DeleteSrcTemplateArgs";
import { FindFirstSrcTemplateArgs } from "./args/FindFirstSrcTemplateArgs";
import { FindManySrcTemplateArgs } from "./args/FindManySrcTemplateArgs";
import { FindUniqueSrcTemplateArgs } from "./args/FindUniqueSrcTemplateArgs";
import { UpdateManySrcTemplateArgs } from "./args/UpdateManySrcTemplateArgs";
import { UpdateSrcTemplateArgs } from "./args/UpdateSrcTemplateArgs";
import { UpsertSrcTemplateArgs } from "./args/UpsertSrcTemplateArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { SrcTemplate } from "../../../models/SrcTemplate";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSrcTemplate } from "../../outputs/AggregateSrcTemplate";

@TypeGraphQL.Resolver(_of => SrcTemplate)
export class SrcTemplateCrudResolver {
  @TypeGraphQL.Query(_returns => SrcTemplate, {
    nullable: true
  })
  async srcTemplate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueSrcTemplateArgs): Promise<SrcTemplate | null> {
    return getPrismaFromContext(ctx).srcTemplate.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => SrcTemplate, {
    nullable: true
  })
  async findFirstSrcTemplate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstSrcTemplateArgs): Promise<SrcTemplate | null> {
    return getPrismaFromContext(ctx).srcTemplate.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [SrcTemplate], {
    nullable: false
  })
  async srcTemplates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManySrcTemplateArgs): Promise<SrcTemplate[]> {
    return getPrismaFromContext(ctx).srcTemplate.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => SrcTemplate, {
    nullable: false
  })
  async createSrcTemplate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateSrcTemplateArgs): Promise<SrcTemplate> {
    return getPrismaFromContext(ctx).srcTemplate.create(args);
  }

  @TypeGraphQL.Mutation(_returns => SrcTemplate, {
    nullable: true
  })
  async deleteSrcTemplate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteSrcTemplateArgs): Promise<SrcTemplate | null> {
    return getPrismaFromContext(ctx).srcTemplate.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => SrcTemplate, {
    nullable: true
  })
  async updateSrcTemplate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateSrcTemplateArgs): Promise<SrcTemplate | null> {
    return getPrismaFromContext(ctx).srcTemplate.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySrcTemplate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManySrcTemplateArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).srcTemplate.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySrcTemplate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManySrcTemplateArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).srcTemplate.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => SrcTemplate, {
    nullable: false
  })
  async upsertSrcTemplate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertSrcTemplateArgs): Promise<SrcTemplate> {
    return getPrismaFromContext(ctx).srcTemplate.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateSrcTemplate, {
    nullable: false
  })
  async aggregateSrcTemplate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSrcTemplateArgs): Promise<AggregateSrcTemplate> {
    return getPrismaFromContext(ctx).srcTemplate.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
