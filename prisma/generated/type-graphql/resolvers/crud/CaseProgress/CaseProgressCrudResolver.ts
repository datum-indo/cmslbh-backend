import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseProgressArgs } from "./args/AggregateCaseProgressArgs";
import { CreateCaseProgressArgs } from "./args/CreateCaseProgressArgs";
import { DeleteCaseProgressArgs } from "./args/DeleteCaseProgressArgs";
import { DeleteManyCaseProgressArgs } from "./args/DeleteManyCaseProgressArgs";
import { FindFirstCaseProgressArgs } from "./args/FindFirstCaseProgressArgs";
import { FindManyCaseProgressArgs } from "./args/FindManyCaseProgressArgs";
import { FindUniqueCaseProgressArgs } from "./args/FindUniqueCaseProgressArgs";
import { UpdateCaseProgressArgs } from "./args/UpdateCaseProgressArgs";
import { UpdateManyCaseProgressArgs } from "./args/UpdateManyCaseProgressArgs";
import { UpsertCaseProgressArgs } from "./args/UpsertCaseProgressArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { CaseProgress } from "../../../models/CaseProgress";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCaseProgress } from "../../outputs/AggregateCaseProgress";

@TypeGraphQL.Resolver(_of => CaseProgress)
export class CaseProgressCrudResolver {
  @TypeGraphQL.Query(_returns => CaseProgress, {
    nullable: true
  })
  async caseProgress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseProgressArgs): Promise<CaseProgress | null> {
    return getPrismaFromContext(ctx).caseProgress.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => CaseProgress, {
    nullable: true
  })
  async findFirstCaseProgress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseProgressArgs): Promise<CaseProgress | null> {
    return getPrismaFromContext(ctx).caseProgress.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [CaseProgress], {
    nullable: false
  })
  async caseProgresses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseProgressArgs): Promise<CaseProgress[]> {
    return getPrismaFromContext(ctx).caseProgress.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseProgress, {
    nullable: false
  })
  async createCaseProgress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseProgressArgs): Promise<CaseProgress> {
    return getPrismaFromContext(ctx).caseProgress.create(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseProgress, {
    nullable: true
  })
  async deleteCaseProgress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseProgressArgs): Promise<CaseProgress | null> {
    return getPrismaFromContext(ctx).caseProgress.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseProgress, {
    nullable: true
  })
  async updateCaseProgress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseProgressArgs): Promise<CaseProgress | null> {
    return getPrismaFromContext(ctx).caseProgress.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseProgress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseProgressArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseProgress.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseProgress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseProgressArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseProgress.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseProgress, {
    nullable: false
  })
  async upsertCaseProgress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseProgressArgs): Promise<CaseProgress> {
    return getPrismaFromContext(ctx).caseProgress.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCaseProgress, {
    nullable: false
  })
  async aggregateCaseProgress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseProgressArgs): Promise<AggregateCaseProgress> {
    return getPrismaFromContext(ctx).caseProgress.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
