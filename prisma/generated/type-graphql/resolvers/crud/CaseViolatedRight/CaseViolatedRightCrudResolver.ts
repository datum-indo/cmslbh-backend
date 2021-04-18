import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseViolatedRightArgs } from "./args/AggregateCaseViolatedRightArgs";
import { CreateCaseViolatedRightArgs } from "./args/CreateCaseViolatedRightArgs";
import { DeleteCaseViolatedRightArgs } from "./args/DeleteCaseViolatedRightArgs";
import { DeleteManyCaseViolatedRightArgs } from "./args/DeleteManyCaseViolatedRightArgs";
import { FindFirstCaseViolatedRightArgs } from "./args/FindFirstCaseViolatedRightArgs";
import { FindManyCaseViolatedRightArgs } from "./args/FindManyCaseViolatedRightArgs";
import { FindUniqueCaseViolatedRightArgs } from "./args/FindUniqueCaseViolatedRightArgs";
import { UpdateCaseViolatedRightArgs } from "./args/UpdateCaseViolatedRightArgs";
import { UpdateManyCaseViolatedRightArgs } from "./args/UpdateManyCaseViolatedRightArgs";
import { UpsertCaseViolatedRightArgs } from "./args/UpsertCaseViolatedRightArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { CaseViolatedRight } from "../../../models/CaseViolatedRight";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCaseViolatedRight } from "../../outputs/AggregateCaseViolatedRight";

@TypeGraphQL.Resolver(_of => CaseViolatedRight)
export class CaseViolatedRightCrudResolver {
  @TypeGraphQL.Query(_returns => CaseViolatedRight, {
    nullable: true
  })
  async caseViolatedRight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseViolatedRightArgs): Promise<CaseViolatedRight | null> {
    return getPrismaFromContext(ctx).caseViolatedRight.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => CaseViolatedRight, {
    nullable: true
  })
  async findFirstCaseViolatedRight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseViolatedRightArgs): Promise<CaseViolatedRight | null> {
    return getPrismaFromContext(ctx).caseViolatedRight.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [CaseViolatedRight], {
    nullable: false
  })
  async caseViolatedRights(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseViolatedRightArgs): Promise<CaseViolatedRight[]> {
    return getPrismaFromContext(ctx).caseViolatedRight.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseViolatedRight, {
    nullable: false
  })
  async createCaseViolatedRight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseViolatedRightArgs): Promise<CaseViolatedRight> {
    return getPrismaFromContext(ctx).caseViolatedRight.create(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseViolatedRight, {
    nullable: true
  })
  async deleteCaseViolatedRight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseViolatedRightArgs): Promise<CaseViolatedRight | null> {
    return getPrismaFromContext(ctx).caseViolatedRight.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseViolatedRight, {
    nullable: true
  })
  async updateCaseViolatedRight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseViolatedRightArgs): Promise<CaseViolatedRight | null> {
    return getPrismaFromContext(ctx).caseViolatedRight.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseViolatedRight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseViolatedRightArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseViolatedRight.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseViolatedRight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseViolatedRightArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseViolatedRight.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseViolatedRight, {
    nullable: false
  })
  async upsertCaseViolatedRight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseViolatedRightArgs): Promise<CaseViolatedRight> {
    return getPrismaFromContext(ctx).caseViolatedRight.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCaseViolatedRight, {
    nullable: false
  })
  async aggregateCaseViolatedRight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseViolatedRightArgs): Promise<AggregateCaseViolatedRight> {
    return getPrismaFromContext(ctx).caseViolatedRight.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
