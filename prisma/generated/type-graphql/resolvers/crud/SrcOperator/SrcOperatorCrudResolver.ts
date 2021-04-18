import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSrcOperatorArgs } from "./args/AggregateSrcOperatorArgs";
import { CreateSrcOperatorArgs } from "./args/CreateSrcOperatorArgs";
import { DeleteManySrcOperatorArgs } from "./args/DeleteManySrcOperatorArgs";
import { DeleteSrcOperatorArgs } from "./args/DeleteSrcOperatorArgs";
import { FindFirstSrcOperatorArgs } from "./args/FindFirstSrcOperatorArgs";
import { FindManySrcOperatorArgs } from "./args/FindManySrcOperatorArgs";
import { FindUniqueSrcOperatorArgs } from "./args/FindUniqueSrcOperatorArgs";
import { UpdateManySrcOperatorArgs } from "./args/UpdateManySrcOperatorArgs";
import { UpdateSrcOperatorArgs } from "./args/UpdateSrcOperatorArgs";
import { UpsertSrcOperatorArgs } from "./args/UpsertSrcOperatorArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { SrcOperator } from "../../../models/SrcOperator";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSrcOperator } from "../../outputs/AggregateSrcOperator";

@TypeGraphQL.Resolver(_of => SrcOperator)
export class SrcOperatorCrudResolver {
  @TypeGraphQL.Query(_returns => SrcOperator, {
    nullable: true
  })
  async srcOperator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueSrcOperatorArgs): Promise<SrcOperator | null> {
    return getPrismaFromContext(ctx).srcOperator.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => SrcOperator, {
    nullable: true
  })
  async findFirstSrcOperator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstSrcOperatorArgs): Promise<SrcOperator | null> {
    return getPrismaFromContext(ctx).srcOperator.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [SrcOperator], {
    nullable: false
  })
  async srcOperators(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManySrcOperatorArgs): Promise<SrcOperator[]> {
    return getPrismaFromContext(ctx).srcOperator.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => SrcOperator, {
    nullable: false
  })
  async createSrcOperator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateSrcOperatorArgs): Promise<SrcOperator> {
    return getPrismaFromContext(ctx).srcOperator.create(args);
  }

  @TypeGraphQL.Mutation(_returns => SrcOperator, {
    nullable: true
  })
  async deleteSrcOperator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteSrcOperatorArgs): Promise<SrcOperator | null> {
    return getPrismaFromContext(ctx).srcOperator.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => SrcOperator, {
    nullable: true
  })
  async updateSrcOperator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateSrcOperatorArgs): Promise<SrcOperator | null> {
    return getPrismaFromContext(ctx).srcOperator.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySrcOperator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManySrcOperatorArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).srcOperator.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySrcOperator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManySrcOperatorArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).srcOperator.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => SrcOperator, {
    nullable: false
  })
  async upsertSrcOperator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertSrcOperatorArgs): Promise<SrcOperator> {
    return getPrismaFromContext(ctx).srcOperator.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateSrcOperator, {
    nullable: false
  })
  async aggregateSrcOperator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSrcOperatorArgs): Promise<AggregateSrcOperator> {
    return getPrismaFromContext(ctx).srcOperator.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
