import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseClassificationArgs } from "./args/AggregateCaseClassificationArgs";
import { CreateCaseClassificationArgs } from "./args/CreateCaseClassificationArgs";
import { DeleteCaseClassificationArgs } from "./args/DeleteCaseClassificationArgs";
import { DeleteManyCaseClassificationArgs } from "./args/DeleteManyCaseClassificationArgs";
import { FindFirstCaseClassificationArgs } from "./args/FindFirstCaseClassificationArgs";
import { FindManyCaseClassificationArgs } from "./args/FindManyCaseClassificationArgs";
import { FindUniqueCaseClassificationArgs } from "./args/FindUniqueCaseClassificationArgs";
import { UpdateCaseClassificationArgs } from "./args/UpdateCaseClassificationArgs";
import { UpdateManyCaseClassificationArgs } from "./args/UpdateManyCaseClassificationArgs";
import { UpsertCaseClassificationArgs } from "./args/UpsertCaseClassificationArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { CaseClassification } from "../../../models/CaseClassification";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCaseClassification } from "../../outputs/AggregateCaseClassification";

@TypeGraphQL.Resolver(_of => CaseClassification)
export class CaseClassificationCrudResolver {
  @TypeGraphQL.Query(_returns => CaseClassification, {
    nullable: true
  })
  async caseClassification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseClassificationArgs): Promise<CaseClassification | null> {
    return getPrismaFromContext(ctx).caseClassification.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => CaseClassification, {
    nullable: true
  })
  async findFirstCaseClassification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseClassificationArgs): Promise<CaseClassification | null> {
    return getPrismaFromContext(ctx).caseClassification.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [CaseClassification], {
    nullable: false
  })
  async caseClassifications(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseClassificationArgs): Promise<CaseClassification[]> {
    return getPrismaFromContext(ctx).caseClassification.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseClassification, {
    nullable: false
  })
  async createCaseClassification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseClassificationArgs): Promise<CaseClassification> {
    return getPrismaFromContext(ctx).caseClassification.create(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseClassification, {
    nullable: true
  })
  async deleteCaseClassification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseClassificationArgs): Promise<CaseClassification | null> {
    return getPrismaFromContext(ctx).caseClassification.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseClassification, {
    nullable: true
  })
  async updateCaseClassification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseClassificationArgs): Promise<CaseClassification | null> {
    return getPrismaFromContext(ctx).caseClassification.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseClassification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseClassificationArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseClassification.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseClassification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseClassificationArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseClassification.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseClassification, {
    nullable: false
  })
  async upsertCaseClassification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseClassificationArgs): Promise<CaseClassification> {
    return getPrismaFromContext(ctx).caseClassification.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCaseClassification, {
    nullable: false
  })
  async aggregateCaseClassification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseClassificationArgs): Promise<AggregateCaseClassification> {
    return getPrismaFromContext(ctx).caseClassification.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
