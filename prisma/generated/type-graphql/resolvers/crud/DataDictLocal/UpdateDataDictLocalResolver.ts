import * as TypeGraphQL from "type-graphql";
import { UpdateDataDictLocalArgs } from "./args/UpdateDataDictLocalArgs";
import { DataDictLocal } from "../../../models/DataDictLocal";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DataDictLocal)
export class UpdateDataDictLocalResolver {
  @TypeGraphQL.Mutation(_returns => DataDictLocal, {
    nullable: true
  })
  async updateDataDictLocal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateDataDictLocalArgs): Promise<DataDictLocal | null> {
    return getPrismaFromContext(ctx).dataDictLocal.update(args);
  }
}
