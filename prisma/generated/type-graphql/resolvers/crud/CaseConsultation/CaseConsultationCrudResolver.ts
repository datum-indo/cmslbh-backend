import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseConsultationArgs } from "./args/AggregateCaseConsultationArgs";
import { CreateCaseConsultationArgs } from "./args/CreateCaseConsultationArgs";
import { DeleteCaseConsultationArgs } from "./args/DeleteCaseConsultationArgs";
import { DeleteManyCaseConsultationArgs } from "./args/DeleteManyCaseConsultationArgs";
import { FindFirstCaseConsultationArgs } from "./args/FindFirstCaseConsultationArgs";
import { FindManyCaseConsultationArgs } from "./args/FindManyCaseConsultationArgs";
import { FindUniqueCaseConsultationArgs } from "./args/FindUniqueCaseConsultationArgs";
import { UpdateCaseConsultationArgs } from "./args/UpdateCaseConsultationArgs";
import { UpdateManyCaseConsultationArgs } from "./args/UpdateManyCaseConsultationArgs";
import { UpsertCaseConsultationArgs } from "./args/UpsertCaseConsultationArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { CaseConsultation } from "../../../models/CaseConsultation";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCaseConsultation } from "../../outputs/AggregateCaseConsultation";

@TypeGraphQL.Resolver(_of => CaseConsultation)
export class CaseConsultationCrudResolver {
  @TypeGraphQL.Query(_returns => CaseConsultation, {
    nullable: true
  })
  async caseConsultation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseConsultationArgs): Promise<CaseConsultation | null> {
    return getPrismaFromContext(ctx).caseConsultation.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => CaseConsultation, {
    nullable: true
  })
  async findFirstCaseConsultation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseConsultationArgs): Promise<CaseConsultation | null> {
    return getPrismaFromContext(ctx).caseConsultation.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [CaseConsultation], {
    nullable: false
  })
  async caseConsultations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseConsultationArgs): Promise<CaseConsultation[]> {
    return getPrismaFromContext(ctx).caseConsultation.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseConsultation, {
    nullable: false
  })
  async createCaseConsultation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseConsultationArgs): Promise<CaseConsultation> {
    return getPrismaFromContext(ctx).caseConsultation.create(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseConsultation, {
    nullable: true
  })
  async deleteCaseConsultation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseConsultationArgs): Promise<CaseConsultation | null> {
    return getPrismaFromContext(ctx).caseConsultation.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseConsultation, {
    nullable: true
  })
  async updateCaseConsultation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseConsultationArgs): Promise<CaseConsultation | null> {
    return getPrismaFromContext(ctx).caseConsultation.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseConsultation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseConsultationArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseConsultation.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseConsultation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseConsultationArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseConsultation.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseConsultation, {
    nullable: false
  })
  async upsertCaseConsultation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseConsultationArgs): Promise<CaseConsultation> {
    return getPrismaFromContext(ctx).caseConsultation.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCaseConsultation, {
    nullable: false
  })
  async aggregateCaseConsultation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseConsultationArgs): Promise<AggregateCaseConsultation> {
    return getPrismaFromContext(ctx).caseConsultation.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
