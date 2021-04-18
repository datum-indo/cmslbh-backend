import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseTransferReferralArgs } from "./args/AggregateCaseTransferReferralArgs";
import { CreateCaseTransferReferralArgs } from "./args/CreateCaseTransferReferralArgs";
import { DeleteCaseTransferReferralArgs } from "./args/DeleteCaseTransferReferralArgs";
import { DeleteManyCaseTransferReferralArgs } from "./args/DeleteManyCaseTransferReferralArgs";
import { FindFirstCaseTransferReferralArgs } from "./args/FindFirstCaseTransferReferralArgs";
import { FindManyCaseTransferReferralArgs } from "./args/FindManyCaseTransferReferralArgs";
import { FindUniqueCaseTransferReferralArgs } from "./args/FindUniqueCaseTransferReferralArgs";
import { UpdateCaseTransferReferralArgs } from "./args/UpdateCaseTransferReferralArgs";
import { UpdateManyCaseTransferReferralArgs } from "./args/UpdateManyCaseTransferReferralArgs";
import { UpsertCaseTransferReferralArgs } from "./args/UpsertCaseTransferReferralArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { CaseTransferReferral } from "../../../models/CaseTransferReferral";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCaseTransferReferral } from "../../outputs/AggregateCaseTransferReferral";

@TypeGraphQL.Resolver(_of => CaseTransferReferral)
export class CaseTransferReferralCrudResolver {
  @TypeGraphQL.Query(_returns => CaseTransferReferral, {
    nullable: true
  })
  async caseTransferReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseTransferReferralArgs): Promise<CaseTransferReferral | null> {
    return getPrismaFromContext(ctx).caseTransferReferral.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => CaseTransferReferral, {
    nullable: true
  })
  async findFirstCaseTransferReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseTransferReferralArgs): Promise<CaseTransferReferral | null> {
    return getPrismaFromContext(ctx).caseTransferReferral.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [CaseTransferReferral], {
    nullable: false
  })
  async caseTransferReferrals(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseTransferReferralArgs): Promise<CaseTransferReferral[]> {
    return getPrismaFromContext(ctx).caseTransferReferral.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseTransferReferral, {
    nullable: false
  })
  async createCaseTransferReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseTransferReferralArgs): Promise<CaseTransferReferral> {
    return getPrismaFromContext(ctx).caseTransferReferral.create(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseTransferReferral, {
    nullable: true
  })
  async deleteCaseTransferReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseTransferReferralArgs): Promise<CaseTransferReferral | null> {
    return getPrismaFromContext(ctx).caseTransferReferral.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseTransferReferral, {
    nullable: true
  })
  async updateCaseTransferReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseTransferReferralArgs): Promise<CaseTransferReferral | null> {
    return getPrismaFromContext(ctx).caseTransferReferral.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseTransferReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseTransferReferralArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseTransferReferral.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseTransferReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseTransferReferralArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseTransferReferral.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseTransferReferral, {
    nullable: false
  })
  async upsertCaseTransferReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseTransferReferralArgs): Promise<CaseTransferReferral> {
    return getPrismaFromContext(ctx).caseTransferReferral.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCaseTransferReferral, {
    nullable: false
  })
  async aggregateCaseTransferReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseTransferReferralArgs): Promise<AggregateCaseTransferReferral> {
    return getPrismaFromContext(ctx).caseTransferReferral.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
