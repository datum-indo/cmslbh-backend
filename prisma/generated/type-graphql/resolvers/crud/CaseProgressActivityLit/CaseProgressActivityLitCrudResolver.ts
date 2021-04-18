import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseProgressActivityLitArgs } from "./args/AggregateCaseProgressActivityLitArgs";
import { CreateCaseProgressActivityLitArgs } from "./args/CreateCaseProgressActivityLitArgs";
import { DeleteCaseProgressActivityLitArgs } from "./args/DeleteCaseProgressActivityLitArgs";
import { DeleteManyCaseProgressActivityLitArgs } from "./args/DeleteManyCaseProgressActivityLitArgs";
import { FindFirstCaseProgressActivityLitArgs } from "./args/FindFirstCaseProgressActivityLitArgs";
import { FindManyCaseProgressActivityLitArgs } from "./args/FindManyCaseProgressActivityLitArgs";
import { FindUniqueCaseProgressActivityLitArgs } from "./args/FindUniqueCaseProgressActivityLitArgs";
import { UpdateCaseProgressActivityLitArgs } from "./args/UpdateCaseProgressActivityLitArgs";
import { UpdateManyCaseProgressActivityLitArgs } from "./args/UpdateManyCaseProgressActivityLitArgs";
import { UpsertCaseProgressActivityLitArgs } from "./args/UpsertCaseProgressActivityLitArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { CaseProgressActivityLit } from "../../../models/CaseProgressActivityLit";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCaseProgressActivityLit } from "../../outputs/AggregateCaseProgressActivityLit";

@TypeGraphQL.Resolver(_of => CaseProgressActivityLit)
export class CaseProgressActivityLitCrudResolver {
  @TypeGraphQL.Query(_returns => CaseProgressActivityLit, {
    nullable: true
  })
  async caseProgressActivityLit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseProgressActivityLitArgs): Promise<CaseProgressActivityLit | null> {
    return getPrismaFromContext(ctx).caseProgressActivityLit.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => CaseProgressActivityLit, {
    nullable: true
  })
  async findFirstCaseProgressActivityLit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseProgressActivityLitArgs): Promise<CaseProgressActivityLit | null> {
    return getPrismaFromContext(ctx).caseProgressActivityLit.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [CaseProgressActivityLit], {
    nullable: false
  })
  async caseProgressActivityLits(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseProgressActivityLitArgs): Promise<CaseProgressActivityLit[]> {
    return getPrismaFromContext(ctx).caseProgressActivityLit.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseProgressActivityLit, {
    nullable: false
  })
  async createCaseProgressActivityLit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseProgressActivityLitArgs): Promise<CaseProgressActivityLit> {
    return getPrismaFromContext(ctx).caseProgressActivityLit.create(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseProgressActivityLit, {
    nullable: true
  })
  async deleteCaseProgressActivityLit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseProgressActivityLitArgs): Promise<CaseProgressActivityLit | null> {
    return getPrismaFromContext(ctx).caseProgressActivityLit.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseProgressActivityLit, {
    nullable: true
  })
  async updateCaseProgressActivityLit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseProgressActivityLitArgs): Promise<CaseProgressActivityLit | null> {
    return getPrismaFromContext(ctx).caseProgressActivityLit.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseProgressActivityLit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseProgressActivityLitArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseProgressActivityLit.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseProgressActivityLit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseProgressActivityLitArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseProgressActivityLit.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseProgressActivityLit, {
    nullable: false
  })
  async upsertCaseProgressActivityLit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseProgressActivityLitArgs): Promise<CaseProgressActivityLit> {
    return getPrismaFromContext(ctx).caseProgressActivityLit.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCaseProgressActivityLit, {
    nullable: false
  })
  async aggregateCaseProgressActivityLit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseProgressActivityLitArgs): Promise<AggregateCaseProgressActivityLit> {
    return getPrismaFromContext(ctx).caseProgressActivityLit.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
