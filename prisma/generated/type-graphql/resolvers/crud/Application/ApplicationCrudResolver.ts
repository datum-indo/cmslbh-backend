import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateApplicationArgs } from "./args/AggregateApplicationArgs";
import { CreateApplicationArgs } from "./args/CreateApplicationArgs";
import { DeleteApplicationArgs } from "./args/DeleteApplicationArgs";
import { DeleteManyApplicationArgs } from "./args/DeleteManyApplicationArgs";
import { FindFirstApplicationArgs } from "./args/FindFirstApplicationArgs";
import { FindManyApplicationArgs } from "./args/FindManyApplicationArgs";
import { FindUniqueApplicationArgs } from "./args/FindUniqueApplicationArgs";
import { UpdateApplicationArgs } from "./args/UpdateApplicationArgs";
import { UpdateManyApplicationArgs } from "./args/UpdateManyApplicationArgs";
import { UpsertApplicationArgs } from "./args/UpsertApplicationArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { Application } from "../../../models/Application";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateApplication } from "../../outputs/AggregateApplication";

@TypeGraphQL.Resolver(_of => Application)
export class ApplicationCrudResolver {
  @TypeGraphQL.Query(_returns => Application, {
    nullable: true
  })
  async application(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueApplicationArgs): Promise<Application | null> {
    return getPrismaFromContext(ctx).application.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Application, {
    nullable: true
  })
  async findFirstApplication(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstApplicationArgs): Promise<Application | null> {
    return getPrismaFromContext(ctx).application.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Application], {
    nullable: false
  })
  async applications(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyApplicationArgs): Promise<Application[]> {
    return getPrismaFromContext(ctx).application.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Application, {
    nullable: false
  })
  async createApplication(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateApplicationArgs): Promise<Application> {
    return getPrismaFromContext(ctx).application.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Application, {
    nullable: true
  })
  async deleteApplication(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteApplicationArgs): Promise<Application | null> {
    return getPrismaFromContext(ctx).application.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Application, {
    nullable: true
  })
  async updateApplication(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateApplicationArgs): Promise<Application | null> {
    return getPrismaFromContext(ctx).application.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyApplication(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyApplicationArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).application.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyApplication(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyApplicationArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).application.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Application, {
    nullable: false
  })
  async upsertApplication(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertApplicationArgs): Promise<Application> {
    return getPrismaFromContext(ctx).application.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateApplication, {
    nullable: false
  })
  async aggregateApplication(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateApplicationArgs): Promise<AggregateApplication> {
    return getPrismaFromContext(ctx).application.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
