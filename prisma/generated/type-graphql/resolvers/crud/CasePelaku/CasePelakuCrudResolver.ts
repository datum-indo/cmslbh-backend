import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCasePelakuArgs } from "./args/AggregateCasePelakuArgs";
import { CreateCasePelakuArgs } from "./args/CreateCasePelakuArgs";
import { DeleteCasePelakuArgs } from "./args/DeleteCasePelakuArgs";
import { DeleteManyCasePelakuArgs } from "./args/DeleteManyCasePelakuArgs";
import { FindFirstCasePelakuArgs } from "./args/FindFirstCasePelakuArgs";
import { FindManyCasePelakuArgs } from "./args/FindManyCasePelakuArgs";
import { FindUniqueCasePelakuArgs } from "./args/FindUniqueCasePelakuArgs";
import { UpdateCasePelakuArgs } from "./args/UpdateCasePelakuArgs";
import { UpdateManyCasePelakuArgs } from "./args/UpdateManyCasePelakuArgs";
import { UpsertCasePelakuArgs } from "./args/UpsertCasePelakuArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { CasePelaku } from "../../../models/CasePelaku";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCasePelaku } from "../../outputs/AggregateCasePelaku";

@TypeGraphQL.Resolver(_of => CasePelaku)
export class CasePelakuCrudResolver {
  @TypeGraphQL.Query(_returns => CasePelaku, {
    nullable: true
  })
  async casePelaku(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCasePelakuArgs): Promise<CasePelaku | null> {
    return getPrismaFromContext(ctx).casePelaku.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => CasePelaku, {
    nullable: true
  })
  async findFirstCasePelaku(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCasePelakuArgs): Promise<CasePelaku | null> {
    return getPrismaFromContext(ctx).casePelaku.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [CasePelaku], {
    nullable: false
  })
  async casePelakus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCasePelakuArgs): Promise<CasePelaku[]> {
    return getPrismaFromContext(ctx).casePelaku.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CasePelaku, {
    nullable: false
  })
  async createCasePelaku(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCasePelakuArgs): Promise<CasePelaku> {
    return getPrismaFromContext(ctx).casePelaku.create(args);
  }

  @TypeGraphQL.Mutation(_returns => CasePelaku, {
    nullable: true
  })
  async deleteCasePelaku(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCasePelakuArgs): Promise<CasePelaku | null> {
    return getPrismaFromContext(ctx).casePelaku.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => CasePelaku, {
    nullable: true
  })
  async updateCasePelaku(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCasePelakuArgs): Promise<CasePelaku | null> {
    return getPrismaFromContext(ctx).casePelaku.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCasePelaku(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCasePelakuArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).casePelaku.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCasePelaku(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCasePelakuArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).casePelaku.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CasePelaku, {
    nullable: false
  })
  async upsertCasePelaku(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCasePelakuArgs): Promise<CasePelaku> {
    return getPrismaFromContext(ctx).casePelaku.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCasePelaku, {
    nullable: false
  })
  async aggregateCasePelaku(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCasePelakuArgs): Promise<AggregateCasePelaku> {
    return getPrismaFromContext(ctx).casePelaku.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
