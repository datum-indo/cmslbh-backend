import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseProgressActivityNonlitArgs } from "./args/AggregateCaseProgressActivityNonlitArgs";
import { CreateCaseProgressActivityNonlitArgs } from "./args/CreateCaseProgressActivityNonlitArgs";
import { DeleteCaseProgressActivityNonlitArgs } from "./args/DeleteCaseProgressActivityNonlitArgs";
import { DeleteManyCaseProgressActivityNonlitArgs } from "./args/DeleteManyCaseProgressActivityNonlitArgs";
import { FindFirstCaseProgressActivityNonlitArgs } from "./args/FindFirstCaseProgressActivityNonlitArgs";
import { FindManyCaseProgressActivityNonlitArgs } from "./args/FindManyCaseProgressActivityNonlitArgs";
import { FindUniqueCaseProgressActivityNonlitArgs } from "./args/FindUniqueCaseProgressActivityNonlitArgs";
import { UpdateCaseProgressActivityNonlitArgs } from "./args/UpdateCaseProgressActivityNonlitArgs";
import { UpdateManyCaseProgressActivityNonlitArgs } from "./args/UpdateManyCaseProgressActivityNonlitArgs";
import { UpsertCaseProgressActivityNonlitArgs } from "./args/UpsertCaseProgressActivityNonlitArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { CaseProgressActivityNonlit } from "../../../models/CaseProgressActivityNonlit";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCaseProgressActivityNonlit } from "../../outputs/AggregateCaseProgressActivityNonlit";

@TypeGraphQL.Resolver(_of => CaseProgressActivityNonlit)
export class CaseProgressActivityNonlitCrudResolver {
  @TypeGraphQL.Query(_returns => CaseProgressActivityNonlit, {
    nullable: true
  })
  async caseProgressActivityNonlit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseProgressActivityNonlitArgs): Promise<CaseProgressActivityNonlit | null> {
    return getPrismaFromContext(ctx).caseProgressActivityNonlit.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => CaseProgressActivityNonlit, {
    nullable: true
  })
  async findFirstCaseProgressActivityNonlit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseProgressActivityNonlitArgs): Promise<CaseProgressActivityNonlit | null> {
    return getPrismaFromContext(ctx).caseProgressActivityNonlit.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [CaseProgressActivityNonlit], {
    nullable: false
  })
  async caseProgressActivityNonlits(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseProgressActivityNonlitArgs): Promise<CaseProgressActivityNonlit[]> {
    return getPrismaFromContext(ctx).caseProgressActivityNonlit.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseProgressActivityNonlit, {
    nullable: false
  })
  async createCaseProgressActivityNonlit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseProgressActivityNonlitArgs): Promise<CaseProgressActivityNonlit> {
    return getPrismaFromContext(ctx).caseProgressActivityNonlit.create(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseProgressActivityNonlit, {
    nullable: true
  })
  async deleteCaseProgressActivityNonlit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseProgressActivityNonlitArgs): Promise<CaseProgressActivityNonlit | null> {
    return getPrismaFromContext(ctx).caseProgressActivityNonlit.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseProgressActivityNonlit, {
    nullable: true
  })
  async updateCaseProgressActivityNonlit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseProgressActivityNonlitArgs): Promise<CaseProgressActivityNonlit | null> {
    return getPrismaFromContext(ctx).caseProgressActivityNonlit.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseProgressActivityNonlit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseProgressActivityNonlitArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseProgressActivityNonlit.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseProgressActivityNonlit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseProgressActivityNonlitArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseProgressActivityNonlit.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseProgressActivityNonlit, {
    nullable: false
  })
  async upsertCaseProgressActivityNonlit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseProgressActivityNonlitArgs): Promise<CaseProgressActivityNonlit> {
    return getPrismaFromContext(ctx).caseProgressActivityNonlit.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCaseProgressActivityNonlit, {
    nullable: false
  })
  async aggregateCaseProgressActivityNonlit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseProgressActivityNonlitArgs): Promise<AggregateCaseProgressActivityNonlit> {
    return getPrismaFromContext(ctx).caseProgressActivityNonlit.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
