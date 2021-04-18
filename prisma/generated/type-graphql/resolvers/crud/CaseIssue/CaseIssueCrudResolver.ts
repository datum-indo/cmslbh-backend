import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseIssueArgs } from "./args/AggregateCaseIssueArgs";
import { CreateCaseIssueArgs } from "./args/CreateCaseIssueArgs";
import { DeleteCaseIssueArgs } from "./args/DeleteCaseIssueArgs";
import { DeleteManyCaseIssueArgs } from "./args/DeleteManyCaseIssueArgs";
import { FindFirstCaseIssueArgs } from "./args/FindFirstCaseIssueArgs";
import { FindManyCaseIssueArgs } from "./args/FindManyCaseIssueArgs";
import { FindUniqueCaseIssueArgs } from "./args/FindUniqueCaseIssueArgs";
import { UpdateCaseIssueArgs } from "./args/UpdateCaseIssueArgs";
import { UpdateManyCaseIssueArgs } from "./args/UpdateManyCaseIssueArgs";
import { UpsertCaseIssueArgs } from "./args/UpsertCaseIssueArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { CaseIssue } from "../../../models/CaseIssue";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCaseIssue } from "../../outputs/AggregateCaseIssue";

@TypeGraphQL.Resolver(_of => CaseIssue)
export class CaseIssueCrudResolver {
  @TypeGraphQL.Query(_returns => CaseIssue, {
    nullable: true
  })
  async caseIssue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseIssueArgs): Promise<CaseIssue | null> {
    return getPrismaFromContext(ctx).caseIssue.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => CaseIssue, {
    nullable: true
  })
  async findFirstCaseIssue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseIssueArgs): Promise<CaseIssue | null> {
    return getPrismaFromContext(ctx).caseIssue.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [CaseIssue], {
    nullable: false
  })
  async caseIssues(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseIssueArgs): Promise<CaseIssue[]> {
    return getPrismaFromContext(ctx).caseIssue.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseIssue, {
    nullable: false
  })
  async createCaseIssue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseIssueArgs): Promise<CaseIssue> {
    return getPrismaFromContext(ctx).caseIssue.create(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseIssue, {
    nullable: true
  })
  async deleteCaseIssue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseIssueArgs): Promise<CaseIssue | null> {
    return getPrismaFromContext(ctx).caseIssue.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseIssue, {
    nullable: true
  })
  async updateCaseIssue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseIssueArgs): Promise<CaseIssue | null> {
    return getPrismaFromContext(ctx).caseIssue.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseIssue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseIssueArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseIssue.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseIssue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseIssueArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseIssue.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseIssue, {
    nullable: false
  })
  async upsertCaseIssue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseIssueArgs): Promise<CaseIssue> {
    return getPrismaFromContext(ctx).caseIssue.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCaseIssue, {
    nullable: false
  })
  async aggregateCaseIssue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseIssueArgs): Promise<AggregateCaseIssue> {
    return getPrismaFromContext(ctx).caseIssue.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
