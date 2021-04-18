import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseConsultationAppArgs } from "./args/AggregateCaseConsultationAppArgs";
import { CreateCaseConsultationAppArgs } from "./args/CreateCaseConsultationAppArgs";
import { DeleteCaseConsultationAppArgs } from "./args/DeleteCaseConsultationAppArgs";
import { DeleteManyCaseConsultationAppArgs } from "./args/DeleteManyCaseConsultationAppArgs";
import { FindFirstCaseConsultationAppArgs } from "./args/FindFirstCaseConsultationAppArgs";
import { FindManyCaseConsultationAppArgs } from "./args/FindManyCaseConsultationAppArgs";
import { FindUniqueCaseConsultationAppArgs } from "./args/FindUniqueCaseConsultationAppArgs";
import { UpdateCaseConsultationAppArgs } from "./args/UpdateCaseConsultationAppArgs";
import { UpdateManyCaseConsultationAppArgs } from "./args/UpdateManyCaseConsultationAppArgs";
import { UpsertCaseConsultationAppArgs } from "./args/UpsertCaseConsultationAppArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { CaseConsultationApp } from "../../../models/CaseConsultationApp";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCaseConsultationApp } from "../../outputs/AggregateCaseConsultationApp";

@TypeGraphQL.Resolver(_of => CaseConsultationApp)
export class CaseConsultationAppCrudResolver {
  @TypeGraphQL.Query(_returns => CaseConsultationApp, {
    nullable: true
  })
  async caseConsultationApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseConsultationAppArgs): Promise<CaseConsultationApp | null> {
    return getPrismaFromContext(ctx).caseConsultationApp.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => CaseConsultationApp, {
    nullable: true
  })
  async findFirstCaseConsultationApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseConsultationAppArgs): Promise<CaseConsultationApp | null> {
    return getPrismaFromContext(ctx).caseConsultationApp.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [CaseConsultationApp], {
    nullable: false
  })
  async caseConsultationApps(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseConsultationAppArgs): Promise<CaseConsultationApp[]> {
    return getPrismaFromContext(ctx).caseConsultationApp.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseConsultationApp, {
    nullable: false
  })
  async createCaseConsultationApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseConsultationAppArgs): Promise<CaseConsultationApp> {
    return getPrismaFromContext(ctx).caseConsultationApp.create(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseConsultationApp, {
    nullable: true
  })
  async deleteCaseConsultationApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseConsultationAppArgs): Promise<CaseConsultationApp | null> {
    return getPrismaFromContext(ctx).caseConsultationApp.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseConsultationApp, {
    nullable: true
  })
  async updateCaseConsultationApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseConsultationAppArgs): Promise<CaseConsultationApp | null> {
    return getPrismaFromContext(ctx).caseConsultationApp.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseConsultationApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseConsultationAppArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseConsultationApp.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseConsultationApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseConsultationAppArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseConsultationApp.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseConsultationApp, {
    nullable: false
  })
  async upsertCaseConsultationApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseConsultationAppArgs): Promise<CaseConsultationApp> {
    return getPrismaFromContext(ctx).caseConsultationApp.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCaseConsultationApp, {
    nullable: false
  })
  async aggregateCaseConsultationApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseConsultationAppArgs): Promise<AggregateCaseConsultationApp> {
    return getPrismaFromContext(ctx).caseConsultationApp.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
