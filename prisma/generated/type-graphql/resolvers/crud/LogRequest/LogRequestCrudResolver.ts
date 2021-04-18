import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateLogRequestArgs } from "./args/AggregateLogRequestArgs";
import { CreateLogRequestArgs } from "./args/CreateLogRequestArgs";
import { DeleteLogRequestArgs } from "./args/DeleteLogRequestArgs";
import { DeleteManyLogRequestArgs } from "./args/DeleteManyLogRequestArgs";
import { FindFirstLogRequestArgs } from "./args/FindFirstLogRequestArgs";
import { FindManyLogRequestArgs } from "./args/FindManyLogRequestArgs";
import { FindUniqueLogRequestArgs } from "./args/FindUniqueLogRequestArgs";
import { UpdateLogRequestArgs } from "./args/UpdateLogRequestArgs";
import { UpdateManyLogRequestArgs } from "./args/UpdateManyLogRequestArgs";
import { UpsertLogRequestArgs } from "./args/UpsertLogRequestArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { LogRequest } from "../../../models/LogRequest";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateLogRequest } from "../../outputs/AggregateLogRequest";

@TypeGraphQL.Resolver(_of => LogRequest)
export class LogRequestCrudResolver {
  @TypeGraphQL.Query(_returns => LogRequest, {
    nullable: true
  })
  async logRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueLogRequestArgs): Promise<LogRequest | null> {
    return getPrismaFromContext(ctx).logRequest.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => LogRequest, {
    nullable: true
  })
  async findFirstLogRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstLogRequestArgs): Promise<LogRequest | null> {
    return getPrismaFromContext(ctx).logRequest.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [LogRequest], {
    nullable: false
  })
  async logRequests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyLogRequestArgs): Promise<LogRequest[]> {
    return getPrismaFromContext(ctx).logRequest.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => LogRequest, {
    nullable: false
  })
  async createLogRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateLogRequestArgs): Promise<LogRequest> {
    return getPrismaFromContext(ctx).logRequest.create(args);
  }

  @TypeGraphQL.Mutation(_returns => LogRequest, {
    nullable: true
  })
  async deleteLogRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteLogRequestArgs): Promise<LogRequest | null> {
    return getPrismaFromContext(ctx).logRequest.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => LogRequest, {
    nullable: true
  })
  async updateLogRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateLogRequestArgs): Promise<LogRequest | null> {
    return getPrismaFromContext(ctx).logRequest.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyLogRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyLogRequestArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).logRequest.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyLogRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyLogRequestArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).logRequest.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => LogRequest, {
    nullable: false
  })
  async upsertLogRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertLogRequestArgs): Promise<LogRequest> {
    return getPrismaFromContext(ctx).logRequest.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateLogRequest, {
    nullable: false
  })
  async aggregateLogRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLogRequestArgs): Promise<AggregateLogRequest> {
    return getPrismaFromContext(ctx).logRequest.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
