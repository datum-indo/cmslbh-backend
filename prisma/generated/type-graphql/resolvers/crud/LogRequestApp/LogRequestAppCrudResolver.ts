import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateLogRequestAppArgs } from "./args/AggregateLogRequestAppArgs";
import { CreateLogRequestAppArgs } from "./args/CreateLogRequestAppArgs";
import { DeleteLogRequestAppArgs } from "./args/DeleteLogRequestAppArgs";
import { DeleteManyLogRequestAppArgs } from "./args/DeleteManyLogRequestAppArgs";
import { FindFirstLogRequestAppArgs } from "./args/FindFirstLogRequestAppArgs";
import { FindManyLogRequestAppArgs } from "./args/FindManyLogRequestAppArgs";
import { FindUniqueLogRequestAppArgs } from "./args/FindUniqueLogRequestAppArgs";
import { UpdateLogRequestAppArgs } from "./args/UpdateLogRequestAppArgs";
import { UpdateManyLogRequestAppArgs } from "./args/UpdateManyLogRequestAppArgs";
import { UpsertLogRequestAppArgs } from "./args/UpsertLogRequestAppArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { LogRequestApp } from "../../../models/LogRequestApp";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateLogRequestApp } from "../../outputs/AggregateLogRequestApp";

@TypeGraphQL.Resolver(_of => LogRequestApp)
export class LogRequestAppCrudResolver {
  @TypeGraphQL.Query(_returns => LogRequestApp, {
    nullable: true
  })
  async logRequestApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueLogRequestAppArgs): Promise<LogRequestApp | null> {
    return getPrismaFromContext(ctx).logRequestApp.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => LogRequestApp, {
    nullable: true
  })
  async findFirstLogRequestApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstLogRequestAppArgs): Promise<LogRequestApp | null> {
    return getPrismaFromContext(ctx).logRequestApp.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [LogRequestApp], {
    nullable: false
  })
  async logRequestApps(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyLogRequestAppArgs): Promise<LogRequestApp[]> {
    return getPrismaFromContext(ctx).logRequestApp.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => LogRequestApp, {
    nullable: false
  })
  async createLogRequestApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateLogRequestAppArgs): Promise<LogRequestApp> {
    return getPrismaFromContext(ctx).logRequestApp.create(args);
  }

  @TypeGraphQL.Mutation(_returns => LogRequestApp, {
    nullable: true
  })
  async deleteLogRequestApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteLogRequestAppArgs): Promise<LogRequestApp | null> {
    return getPrismaFromContext(ctx).logRequestApp.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => LogRequestApp, {
    nullable: true
  })
  async updateLogRequestApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateLogRequestAppArgs): Promise<LogRequestApp | null> {
    return getPrismaFromContext(ctx).logRequestApp.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyLogRequestApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyLogRequestAppArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).logRequestApp.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyLogRequestApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyLogRequestAppArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).logRequestApp.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => LogRequestApp, {
    nullable: false
  })
  async upsertLogRequestApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertLogRequestAppArgs): Promise<LogRequestApp> {
    return getPrismaFromContext(ctx).logRequestApp.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateLogRequestApp, {
    nullable: false
  })
  async aggregateLogRequestApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLogRequestAppArgs): Promise<AggregateLogRequestApp> {
    return getPrismaFromContext(ctx).logRequestApp.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
