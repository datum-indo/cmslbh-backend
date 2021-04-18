import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCasePkArgs } from "./args/AggregateCasePkArgs";
import { CreateCasePkArgs } from "./args/CreateCasePkArgs";
import { DeleteCasePkArgs } from "./args/DeleteCasePkArgs";
import { DeleteManyCasePkArgs } from "./args/DeleteManyCasePkArgs";
import { FindFirstCasePkArgs } from "./args/FindFirstCasePkArgs";
import { FindManyCasePkArgs } from "./args/FindManyCasePkArgs";
import { FindUniqueCasePkArgs } from "./args/FindUniqueCasePkArgs";
import { UpdateCasePkArgs } from "./args/UpdateCasePkArgs";
import { UpdateManyCasePkArgs } from "./args/UpdateManyCasePkArgs";
import { UpsertCasePkArgs } from "./args/UpsertCasePkArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { CasePk } from "../../../models/CasePk";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCasePk } from "../../outputs/AggregateCasePk";

@TypeGraphQL.Resolver(_of => CasePk)
export class CasePkCrudResolver {
  @TypeGraphQL.Query(_returns => CasePk, {
    nullable: true
  })
  async casePk(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCasePkArgs): Promise<CasePk | null> {
    return getPrismaFromContext(ctx).casePk.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => CasePk, {
    nullable: true
  })
  async findFirstCasePk(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCasePkArgs): Promise<CasePk | null> {
    return getPrismaFromContext(ctx).casePk.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [CasePk], {
    nullable: false
  })
  async casePks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCasePkArgs): Promise<CasePk[]> {
    return getPrismaFromContext(ctx).casePk.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CasePk, {
    nullable: false
  })
  async createCasePk(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCasePkArgs): Promise<CasePk> {
    return getPrismaFromContext(ctx).casePk.create(args);
  }

  @TypeGraphQL.Mutation(_returns => CasePk, {
    nullable: true
  })
  async deleteCasePk(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCasePkArgs): Promise<CasePk | null> {
    return getPrismaFromContext(ctx).casePk.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => CasePk, {
    nullable: true
  })
  async updateCasePk(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCasePkArgs): Promise<CasePk | null> {
    return getPrismaFromContext(ctx).casePk.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCasePk(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCasePkArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).casePk.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCasePk(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCasePkArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).casePk.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CasePk, {
    nullable: false
  })
  async upsertCasePk(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCasePkArgs): Promise<CasePk> {
    return getPrismaFromContext(ctx).casePk.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCasePk, {
    nullable: false
  })
  async aggregateCasePk(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCasePkArgs): Promise<AggregateCasePk> {
    return getPrismaFromContext(ctx).casePk.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
