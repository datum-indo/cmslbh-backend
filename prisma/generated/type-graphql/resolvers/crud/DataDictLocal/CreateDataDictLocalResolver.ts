import * as TypeGraphQL from "type-graphql";
import { CreateDataDictLocalArgs } from "./args/CreateDataDictLocalArgs";
import { DataDictLocal } from "../../../models/DataDictLocal";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DataDictLocal)
export class CreateDataDictLocalResolver {
  @TypeGraphQL.Mutation(_returns => DataDictLocal, {
    nullable: false
  })
  async createDataDictLocal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateDataDictLocalArgs): Promise<DataDictLocal> {
    return getPrismaFromContext(ctx).dataDictLocal.create(args);
  }
}
