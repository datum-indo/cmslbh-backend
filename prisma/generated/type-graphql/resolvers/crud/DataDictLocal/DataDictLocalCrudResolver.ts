import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDataDictLocalArgs } from "./args/AggregateDataDictLocalArgs";
import { CreateDataDictLocalArgs } from "./args/CreateDataDictLocalArgs";
import { DeleteDataDictLocalArgs } from "./args/DeleteDataDictLocalArgs";
import { DeleteManyDataDictLocalArgs } from "./args/DeleteManyDataDictLocalArgs";
import { FindFirstDataDictLocalArgs } from "./args/FindFirstDataDictLocalArgs";
import { FindManyDataDictLocalArgs } from "./args/FindManyDataDictLocalArgs";
import { FindUniqueDataDictLocalArgs } from "./args/FindUniqueDataDictLocalArgs";
import { UpdateDataDictLocalArgs } from "./args/UpdateDataDictLocalArgs";
import { UpdateManyDataDictLocalArgs } from "./args/UpdateManyDataDictLocalArgs";
import { UpsertDataDictLocalArgs } from "./args/UpsertDataDictLocalArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { DataDictLocal } from "../../../models/DataDictLocal";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateDataDictLocal } from "../../outputs/AggregateDataDictLocal";

@TypeGraphQL.Resolver(_of => DataDictLocal)
export class DataDictLocalCrudResolver {
  @TypeGraphQL.Query(_returns => DataDictLocal, {
    nullable: true
  })
  async dataDictLocal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueDataDictLocalArgs): Promise<DataDictLocal | null> {
    return getPrismaFromContext(ctx).dataDictLocal.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => DataDictLocal, {
    nullable: true
  })
  async findFirstDataDictLocal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstDataDictLocalArgs): Promise<DataDictLocal | null> {
    return getPrismaFromContext(ctx).dataDictLocal.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [DataDictLocal], {
    nullable: false
  })
  async dataDictLocals(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyDataDictLocalArgs): Promise<DataDictLocal[]> {
    return getPrismaFromContext(ctx).dataDictLocal.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => DataDictLocal, {
    nullable: false
  })
  async createDataDictLocal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateDataDictLocalArgs): Promise<DataDictLocal> {
    return getPrismaFromContext(ctx).dataDictLocal.create(args);
  }

  @TypeGraphQL.Mutation(_returns => DataDictLocal, {
    nullable: true
  })
  async deleteDataDictLocal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteDataDictLocalArgs): Promise<DataDictLocal | null> {
    return getPrismaFromContext(ctx).dataDictLocal.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => DataDictLocal, {
    nullable: true
  })
  async updateDataDictLocal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateDataDictLocalArgs): Promise<DataDictLocal | null> {
    return getPrismaFromContext(ctx).dataDictLocal.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyDataDictLocal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyDataDictLocalArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).dataDictLocal.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyDataDictLocal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyDataDictLocalArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).dataDictLocal.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => DataDictLocal, {
    nullable: false
  })
  async upsertDataDictLocal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertDataDictLocalArgs): Promise<DataDictLocal> {
    return getPrismaFromContext(ctx).dataDictLocal.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateDataDictLocal, {
    nullable: false
  })
  async aggregateDataDictLocal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDataDictLocalArgs): Promise<AggregateDataDictLocal> {
    return getPrismaFromContext(ctx).dataDictLocal.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
