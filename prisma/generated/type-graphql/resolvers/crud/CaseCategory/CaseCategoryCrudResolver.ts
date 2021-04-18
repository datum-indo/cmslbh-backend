import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseCategoryArgs } from "./args/AggregateCaseCategoryArgs";
import { CreateCaseCategoryArgs } from "./args/CreateCaseCategoryArgs";
import { DeleteCaseCategoryArgs } from "./args/DeleteCaseCategoryArgs";
import { DeleteManyCaseCategoryArgs } from "./args/DeleteManyCaseCategoryArgs";
import { FindFirstCaseCategoryArgs } from "./args/FindFirstCaseCategoryArgs";
import { FindManyCaseCategoryArgs } from "./args/FindManyCaseCategoryArgs";
import { FindUniqueCaseCategoryArgs } from "./args/FindUniqueCaseCategoryArgs";
import { UpdateCaseCategoryArgs } from "./args/UpdateCaseCategoryArgs";
import { UpdateManyCaseCategoryArgs } from "./args/UpdateManyCaseCategoryArgs";
import { UpsertCaseCategoryArgs } from "./args/UpsertCaseCategoryArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { CaseCategory } from "../../../models/CaseCategory";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCaseCategory } from "../../outputs/AggregateCaseCategory";

@TypeGraphQL.Resolver(_of => CaseCategory)
export class CaseCategoryCrudResolver {
  @TypeGraphQL.Query(_returns => CaseCategory, {
    nullable: true
  })
  async caseCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseCategoryArgs): Promise<CaseCategory | null> {
    return getPrismaFromContext(ctx).caseCategory.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => CaseCategory, {
    nullable: true
  })
  async findFirstCaseCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseCategoryArgs): Promise<CaseCategory | null> {
    return getPrismaFromContext(ctx).caseCategory.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [CaseCategory], {
    nullable: false
  })
  async caseCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseCategoryArgs): Promise<CaseCategory[]> {
    return getPrismaFromContext(ctx).caseCategory.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseCategory, {
    nullable: false
  })
  async createCaseCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseCategoryArgs): Promise<CaseCategory> {
    return getPrismaFromContext(ctx).caseCategory.create(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseCategory, {
    nullable: true
  })
  async deleteCaseCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseCategoryArgs): Promise<CaseCategory | null> {
    return getPrismaFromContext(ctx).caseCategory.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseCategory, {
    nullable: true
  })
  async updateCaseCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseCategoryArgs): Promise<CaseCategory | null> {
    return getPrismaFromContext(ctx).caseCategory.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseCategoryArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseCategory.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseCategoryArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseCategory.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseCategory, {
    nullable: false
  })
  async upsertCaseCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseCategoryArgs): Promise<CaseCategory> {
    return getPrismaFromContext(ctx).caseCategory.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCaseCategory, {
    nullable: false
  })
  async aggregateCaseCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseCategoryArgs): Promise<AggregateCaseCategory> {
    return getPrismaFromContext(ctx).caseCategory.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
