import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseModusArgs } from "./args/AggregateCaseModusArgs";
import { CreateCaseModusArgs } from "./args/CreateCaseModusArgs";
import { DeleteCaseModusArgs } from "./args/DeleteCaseModusArgs";
import { DeleteManyCaseModusArgs } from "./args/DeleteManyCaseModusArgs";
import { FindFirstCaseModusArgs } from "./args/FindFirstCaseModusArgs";
import { FindManyCaseModusArgs } from "./args/FindManyCaseModusArgs";
import { FindUniqueCaseModusArgs } from "./args/FindUniqueCaseModusArgs";
import { UpdateCaseModusArgs } from "./args/UpdateCaseModusArgs";
import { UpdateManyCaseModusArgs } from "./args/UpdateManyCaseModusArgs";
import { UpsertCaseModusArgs } from "./args/UpsertCaseModusArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { CaseModus } from "../../../models/CaseModus";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCaseModus } from "../../outputs/AggregateCaseModus";

@TypeGraphQL.Resolver(_of => CaseModus)
export class CaseModusCrudResolver {
  @TypeGraphQL.Query(_returns => CaseModus, {
    nullable: true
  })
  async caseModus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseModusArgs): Promise<CaseModus | null> {
    return getPrismaFromContext(ctx).caseModus.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => CaseModus, {
    nullable: true
  })
  async findFirstCaseModus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseModusArgs): Promise<CaseModus | null> {
    return getPrismaFromContext(ctx).caseModus.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [CaseModus], {
    nullable: false
  })
  async caseModuses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseModusArgs): Promise<CaseModus[]> {
    return getPrismaFromContext(ctx).caseModus.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseModus, {
    nullable: false
  })
  async createCaseModus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseModusArgs): Promise<CaseModus> {
    return getPrismaFromContext(ctx).caseModus.create(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseModus, {
    nullable: true
  })
  async deleteCaseModus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseModusArgs): Promise<CaseModus | null> {
    return getPrismaFromContext(ctx).caseModus.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseModus, {
    nullable: true
  })
  async updateCaseModus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseModusArgs): Promise<CaseModus | null> {
    return getPrismaFromContext(ctx).caseModus.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseModus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseModusArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseModus.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseModus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseModusArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseModus.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseModus, {
    nullable: false
  })
  async upsertCaseModus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseModusArgs): Promise<CaseModus> {
    return getPrismaFromContext(ctx).caseModus.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCaseModus, {
    nullable: false
  })
  async aggregateCaseModus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseModusArgs): Promise<AggregateCaseModus> {
    return getPrismaFromContext(ctx).caseModus.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
