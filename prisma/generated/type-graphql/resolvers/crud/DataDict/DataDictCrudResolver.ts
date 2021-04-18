import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDataDictArgs } from "./args/AggregateDataDictArgs";
import { CreateDataDictArgs } from "./args/CreateDataDictArgs";
import { DeleteDataDictArgs } from "./args/DeleteDataDictArgs";
import { DeleteManyDataDictArgs } from "./args/DeleteManyDataDictArgs";
import { FindFirstDataDictArgs } from "./args/FindFirstDataDictArgs";
import { FindManyDataDictArgs } from "./args/FindManyDataDictArgs";
import { FindUniqueDataDictArgs } from "./args/FindUniqueDataDictArgs";
import { UpdateDataDictArgs } from "./args/UpdateDataDictArgs";
import { UpdateManyDataDictArgs } from "./args/UpdateManyDataDictArgs";
import { UpsertDataDictArgs } from "./args/UpsertDataDictArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { DataDict } from "../../../models/DataDict";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateDataDict } from "../../outputs/AggregateDataDict";

@TypeGraphQL.Resolver(_of => DataDict)
export class DataDictCrudResolver {
  @TypeGraphQL.Query(_returns => DataDict, {
    nullable: true
  })
  async dataDict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueDataDictArgs): Promise<DataDict | null> {
    return getPrismaFromContext(ctx).dataDict.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => DataDict, {
    nullable: true
  })
  async findFirstDataDict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstDataDictArgs): Promise<DataDict | null> {
    return getPrismaFromContext(ctx).dataDict.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [DataDict], {
    nullable: false
  })
  async dataDicts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyDataDictArgs): Promise<DataDict[]> {
    return getPrismaFromContext(ctx).dataDict.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => DataDict, {
    nullable: false
  })
  async createDataDict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateDataDictArgs): Promise<DataDict> {
    return getPrismaFromContext(ctx).dataDict.create(args);
  }

  @TypeGraphQL.Mutation(_returns => DataDict, {
    nullable: true
  })
  async deleteDataDict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteDataDictArgs): Promise<DataDict | null> {
    return getPrismaFromContext(ctx).dataDict.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => DataDict, {
    nullable: true
  })
  async updateDataDict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateDataDictArgs): Promise<DataDict | null> {
    return getPrismaFromContext(ctx).dataDict.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyDataDict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyDataDictArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).dataDict.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyDataDict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyDataDictArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).dataDict.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => DataDict, {
    nullable: false
  })
  async upsertDataDict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertDataDictArgs): Promise<DataDict> {
    return getPrismaFromContext(ctx).dataDict.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateDataDict, {
    nullable: false
  })
  async aggregateDataDict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDataDictArgs): Promise<AggregateDataDict> {
    return getPrismaFromContext(ctx).dataDict.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
