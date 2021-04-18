import * as TypeGraphQL from "type-graphql";
import { UpsertDataDictLocalArgs } from "./args/UpsertDataDictLocalArgs";
import { DataDictLocal } from "../../../models/DataDictLocal";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DataDictLocal)
export class UpsertDataDictLocalResolver {
  @TypeGraphQL.Mutation(_returns => DataDictLocal, {
    nullable: false
  })
  async upsertDataDictLocal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertDataDictLocalArgs): Promise<DataDictLocal> {
    return getPrismaFromContext(ctx).dataDictLocal.upsert(args);
  }
}
