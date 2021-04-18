import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseReferralArgs } from "./args/AggregateCaseReferralArgs";
import { CreateCaseReferralArgs } from "./args/CreateCaseReferralArgs";
import { DeleteCaseReferralArgs } from "./args/DeleteCaseReferralArgs";
import { DeleteManyCaseReferralArgs } from "./args/DeleteManyCaseReferralArgs";
import { FindFirstCaseReferralArgs } from "./args/FindFirstCaseReferralArgs";
import { FindManyCaseReferralArgs } from "./args/FindManyCaseReferralArgs";
import { FindUniqueCaseReferralArgs } from "./args/FindUniqueCaseReferralArgs";
import { UpdateCaseReferralArgs } from "./args/UpdateCaseReferralArgs";
import { UpdateManyCaseReferralArgs } from "./args/UpdateManyCaseReferralArgs";
import { UpsertCaseReferralArgs } from "./args/UpsertCaseReferralArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { CaseReferral } from "../../../models/CaseReferral";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCaseReferral } from "../../outputs/AggregateCaseReferral";

@TypeGraphQL.Resolver(_of => CaseReferral)
export class CaseReferralCrudResolver {
  @TypeGraphQL.Query(_returns => CaseReferral, {
    nullable: true
  })
  async caseReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseReferralArgs): Promise<CaseReferral | null> {
    return getPrismaFromContext(ctx).caseReferral.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => CaseReferral, {
    nullable: true
  })
  async findFirstCaseReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseReferralArgs): Promise<CaseReferral | null> {
    return getPrismaFromContext(ctx).caseReferral.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [CaseReferral], {
    nullable: false
  })
  async caseReferrals(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseReferralArgs): Promise<CaseReferral[]> {
    return getPrismaFromContext(ctx).caseReferral.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseReferral, {
    nullable: false
  })
  async createCaseReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseReferralArgs): Promise<CaseReferral> {
    return getPrismaFromContext(ctx).caseReferral.create(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseReferral, {
    nullable: true
  })
  async deleteCaseReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseReferralArgs): Promise<CaseReferral | null> {
    return getPrismaFromContext(ctx).caseReferral.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseReferral, {
    nullable: true
  })
  async updateCaseReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseReferralArgs): Promise<CaseReferral | null> {
    return getPrismaFromContext(ctx).caseReferral.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseReferralArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseReferral.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseReferralArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseReferral.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseReferral, {
    nullable: false
  })
  async upsertCaseReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseReferralArgs): Promise<CaseReferral> {
    return getPrismaFromContext(ctx).caseReferral.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCaseReferral, {
    nullable: false
  })
  async aggregateCaseReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseReferralArgs): Promise<AggregateCaseReferral> {
    return getPrismaFromContext(ctx).caseReferral.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
