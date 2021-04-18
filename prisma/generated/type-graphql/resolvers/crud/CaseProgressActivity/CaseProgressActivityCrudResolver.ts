import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseProgressActivityArgs } from "./args/AggregateCaseProgressActivityArgs";
import { CreateCaseProgressActivityArgs } from "./args/CreateCaseProgressActivityArgs";
import { DeleteCaseProgressActivityArgs } from "./args/DeleteCaseProgressActivityArgs";
import { DeleteManyCaseProgressActivityArgs } from "./args/DeleteManyCaseProgressActivityArgs";
import { FindFirstCaseProgressActivityArgs } from "./args/FindFirstCaseProgressActivityArgs";
import { FindManyCaseProgressActivityArgs } from "./args/FindManyCaseProgressActivityArgs";
import { FindUniqueCaseProgressActivityArgs } from "./args/FindUniqueCaseProgressActivityArgs";
import { UpdateCaseProgressActivityArgs } from "./args/UpdateCaseProgressActivityArgs";
import { UpdateManyCaseProgressActivityArgs } from "./args/UpdateManyCaseProgressActivityArgs";
import { UpsertCaseProgressActivityArgs } from "./args/UpsertCaseProgressActivityArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { CaseProgressActivity } from "../../../models/CaseProgressActivity";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCaseProgressActivity } from "../../outputs/AggregateCaseProgressActivity";

@TypeGraphQL.Resolver(_of => CaseProgressActivity)
export class CaseProgressActivityCrudResolver {
  @TypeGraphQL.Query(_returns => CaseProgressActivity, {
    nullable: true
  })
  async caseProgressActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseProgressActivityArgs): Promise<CaseProgressActivity | null> {
    return getPrismaFromContext(ctx).caseProgressActivity.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => CaseProgressActivity, {
    nullable: true
  })
  async findFirstCaseProgressActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseProgressActivityArgs): Promise<CaseProgressActivity | null> {
    return getPrismaFromContext(ctx).caseProgressActivity.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [CaseProgressActivity], {
    nullable: false
  })
  async caseProgressActivities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseProgressActivityArgs): Promise<CaseProgressActivity[]> {
    return getPrismaFromContext(ctx).caseProgressActivity.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseProgressActivity, {
    nullable: false
  })
  async createCaseProgressActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseProgressActivityArgs): Promise<CaseProgressActivity> {
    return getPrismaFromContext(ctx).caseProgressActivity.create(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseProgressActivity, {
    nullable: true
  })
  async deleteCaseProgressActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseProgressActivityArgs): Promise<CaseProgressActivity | null> {
    return getPrismaFromContext(ctx).caseProgressActivity.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseProgressActivity, {
    nullable: true
  })
  async updateCaseProgressActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseProgressActivityArgs): Promise<CaseProgressActivity | null> {
    return getPrismaFromContext(ctx).caseProgressActivity.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseProgressActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseProgressActivityArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseProgressActivity.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseProgressActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseProgressActivityArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseProgressActivity.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseProgressActivity, {
    nullable: false
  })
  async upsertCaseProgressActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseProgressActivityArgs): Promise<CaseProgressActivity> {
    return getPrismaFromContext(ctx).caseProgressActivity.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCaseProgressActivity, {
    nullable: false
  })
  async aggregateCaseProgressActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseProgressActivityArgs): Promise<AggregateCaseProgressActivity> {
    return getPrismaFromContext(ctx).caseProgressActivity.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
