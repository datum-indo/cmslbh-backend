import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseKorbanArgs } from "./args/AggregateCaseKorbanArgs";
import { CreateCaseKorbanArgs } from "./args/CreateCaseKorbanArgs";
import { DeleteCaseKorbanArgs } from "./args/DeleteCaseKorbanArgs";
import { DeleteManyCaseKorbanArgs } from "./args/DeleteManyCaseKorbanArgs";
import { FindFirstCaseKorbanArgs } from "./args/FindFirstCaseKorbanArgs";
import { FindManyCaseKorbanArgs } from "./args/FindManyCaseKorbanArgs";
import { FindUniqueCaseKorbanArgs } from "./args/FindUniqueCaseKorbanArgs";
import { UpdateCaseKorbanArgs } from "./args/UpdateCaseKorbanArgs";
import { UpdateManyCaseKorbanArgs } from "./args/UpdateManyCaseKorbanArgs";
import { UpsertCaseKorbanArgs } from "./args/UpsertCaseKorbanArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { CaseKorban } from "../../../models/CaseKorban";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCaseKorban } from "../../outputs/AggregateCaseKorban";

@TypeGraphQL.Resolver(_of => CaseKorban)
export class CaseKorbanCrudResolver {
  @TypeGraphQL.Query(_returns => CaseKorban, {
    nullable: true
  })
  async caseKorban(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseKorbanArgs): Promise<CaseKorban | null> {
    return getPrismaFromContext(ctx).caseKorban.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => CaseKorban, {
    nullable: true
  })
  async findFirstCaseKorban(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseKorbanArgs): Promise<CaseKorban | null> {
    return getPrismaFromContext(ctx).caseKorban.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [CaseKorban], {
    nullable: false
  })
  async caseKorbans(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseKorbanArgs): Promise<CaseKorban[]> {
    return getPrismaFromContext(ctx).caseKorban.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseKorban, {
    nullable: false
  })
  async createCaseKorban(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseKorbanArgs): Promise<CaseKorban> {
    return getPrismaFromContext(ctx).caseKorban.create(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseKorban, {
    nullable: true
  })
  async deleteCaseKorban(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseKorbanArgs): Promise<CaseKorban | null> {
    return getPrismaFromContext(ctx).caseKorban.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseKorban, {
    nullable: true
  })
  async updateCaseKorban(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseKorbanArgs): Promise<CaseKorban | null> {
    return getPrismaFromContext(ctx).caseKorban.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseKorban(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseKorbanArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseKorban.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseKorban(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseKorbanArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseKorban.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseKorban, {
    nullable: false
  })
  async upsertCaseKorban(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseKorbanArgs): Promise<CaseKorban> {
    return getPrismaFromContext(ctx).caseKorban.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCaseKorban, {
    nullable: false
  })
  async aggregateCaseKorban(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseKorbanArgs): Promise<AggregateCaseKorban> {
    return getPrismaFromContext(ctx).caseKorban.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
