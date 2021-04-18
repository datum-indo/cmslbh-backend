import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseViolenceMethodArgs } from "./args/AggregateCaseViolenceMethodArgs";
import { CreateCaseViolenceMethodArgs } from "./args/CreateCaseViolenceMethodArgs";
import { DeleteCaseViolenceMethodArgs } from "./args/DeleteCaseViolenceMethodArgs";
import { DeleteManyCaseViolenceMethodArgs } from "./args/DeleteManyCaseViolenceMethodArgs";
import { FindFirstCaseViolenceMethodArgs } from "./args/FindFirstCaseViolenceMethodArgs";
import { FindManyCaseViolenceMethodArgs } from "./args/FindManyCaseViolenceMethodArgs";
import { FindUniqueCaseViolenceMethodArgs } from "./args/FindUniqueCaseViolenceMethodArgs";
import { UpdateCaseViolenceMethodArgs } from "./args/UpdateCaseViolenceMethodArgs";
import { UpdateManyCaseViolenceMethodArgs } from "./args/UpdateManyCaseViolenceMethodArgs";
import { UpsertCaseViolenceMethodArgs } from "./args/UpsertCaseViolenceMethodArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { CaseViolenceMethod } from "../../../models/CaseViolenceMethod";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCaseViolenceMethod } from "../../outputs/AggregateCaseViolenceMethod";

@TypeGraphQL.Resolver(_of => CaseViolenceMethod)
export class CaseViolenceMethodCrudResolver {
  @TypeGraphQL.Query(_returns => CaseViolenceMethod, {
    nullable: true
  })
  async caseViolenceMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseViolenceMethodArgs): Promise<CaseViolenceMethod | null> {
    return getPrismaFromContext(ctx).caseViolenceMethod.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => CaseViolenceMethod, {
    nullable: true
  })
  async findFirstCaseViolenceMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseViolenceMethodArgs): Promise<CaseViolenceMethod | null> {
    return getPrismaFromContext(ctx).caseViolenceMethod.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [CaseViolenceMethod], {
    nullable: false
  })
  async caseViolenceMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseViolenceMethodArgs): Promise<CaseViolenceMethod[]> {
    return getPrismaFromContext(ctx).caseViolenceMethod.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseViolenceMethod, {
    nullable: false
  })
  async createCaseViolenceMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseViolenceMethodArgs): Promise<CaseViolenceMethod> {
    return getPrismaFromContext(ctx).caseViolenceMethod.create(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseViolenceMethod, {
    nullable: true
  })
  async deleteCaseViolenceMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseViolenceMethodArgs): Promise<CaseViolenceMethod | null> {
    return getPrismaFromContext(ctx).caseViolenceMethod.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseViolenceMethod, {
    nullable: true
  })
  async updateCaseViolenceMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseViolenceMethodArgs): Promise<CaseViolenceMethod | null> {
    return getPrismaFromContext(ctx).caseViolenceMethod.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseViolenceMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseViolenceMethodArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseViolenceMethod.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseViolenceMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseViolenceMethodArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseViolenceMethod.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseViolenceMethod, {
    nullable: false
  })
  async upsertCaseViolenceMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseViolenceMethodArgs): Promise<CaseViolenceMethod> {
    return getPrismaFromContext(ctx).caseViolenceMethod.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCaseViolenceMethod, {
    nullable: false
  })
  async aggregateCaseViolenceMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseViolenceMethodArgs): Promise<AggregateCaseViolenceMethod> {
    return getPrismaFromContext(ctx).caseViolenceMethod.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
