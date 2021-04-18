import * as TypeGraphQL from "type-graphql";
import { FindUniqueDataDictLocalArgs } from "./args/FindUniqueDataDictLocalArgs";
import { DataDictLocal } from "../../../models/DataDictLocal";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DataDictLocal)
export class FindUniqueDataDictLocalResolver {
  @TypeGraphQL.Query(_returns => DataDictLocal, {
    nullable: true
  })
  async dataDictLocal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueDataDictLocalArgs): Promise<DataDictLocal | null> {
    return getPrismaFromContext(ctx).dataDictLocal.findUnique(args);
  }
}
