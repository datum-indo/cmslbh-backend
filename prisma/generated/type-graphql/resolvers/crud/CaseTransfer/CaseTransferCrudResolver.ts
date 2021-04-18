import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseTransferArgs } from "./args/AggregateCaseTransferArgs";
import { CreateCaseTransferArgs } from "./args/CreateCaseTransferArgs";
import { DeleteCaseTransferArgs } from "./args/DeleteCaseTransferArgs";
import { DeleteManyCaseTransferArgs } from "./args/DeleteManyCaseTransferArgs";
import { FindFirstCaseTransferArgs } from "./args/FindFirstCaseTransferArgs";
import { FindManyCaseTransferArgs } from "./args/FindManyCaseTransferArgs";
import { FindUniqueCaseTransferArgs } from "./args/FindUniqueCaseTransferArgs";
import { UpdateCaseTransferArgs } from "./args/UpdateCaseTransferArgs";
import { UpdateManyCaseTransferArgs } from "./args/UpdateManyCaseTransferArgs";
import { UpsertCaseTransferArgs } from "./args/UpsertCaseTransferArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { CaseTransfer } from "../../../models/CaseTransfer";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCaseTransfer } from "../../outputs/AggregateCaseTransfer";

@TypeGraphQL.Resolver(_of => CaseTransfer)
export class CaseTransferCrudResolver {
  @TypeGraphQL.Query(_returns => CaseTransfer, {
    nullable: true
  })
  async caseTransfer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseTransferArgs): Promise<CaseTransfer | null> {
    return getPrismaFromContext(ctx).caseTransfer.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => CaseTransfer, {
    nullable: true
  })
  async findFirstCaseTransfer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseTransferArgs): Promise<CaseTransfer | null> {
    return getPrismaFromContext(ctx).caseTransfer.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [CaseTransfer], {
    nullable: false
  })
  async caseTransfers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseTransferArgs): Promise<CaseTransfer[]> {
    return getPrismaFromContext(ctx).caseTransfer.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseTransfer, {
    nullable: false
  })
  async createCaseTransfer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseTransferArgs): Promise<CaseTransfer> {
    return getPrismaFromContext(ctx).caseTransfer.create(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseTransfer, {
    nullable: true
  })
  async deleteCaseTransfer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseTransferArgs): Promise<CaseTransfer | null> {
    return getPrismaFromContext(ctx).caseTransfer.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseTransfer, {
    nullable: true
  })
  async updateCaseTransfer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseTransferArgs): Promise<CaseTransfer | null> {
    return getPrismaFromContext(ctx).caseTransfer.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseTransfer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseTransferArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseTransfer.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseTransfer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseTransferArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseTransfer.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseTransfer, {
    nullable: false
  })
  async upsertCaseTransfer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseTransferArgs): Promise<CaseTransfer> {
    return getPrismaFromContext(ctx).caseTransfer.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCaseTransfer, {
    nullable: false
  })
  async aggregateCaseTransfer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseTransferArgs): Promise<AggregateCaseTransfer> {
    return getPrismaFromContext(ctx).caseTransfer.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
