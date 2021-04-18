import * as TypeGraphQL from "type-graphql";
import { FindFirstDataDictLocalArgs } from "./args/FindFirstDataDictLocalArgs";
import { DataDictLocal } from "../../../models/DataDictLocal";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DataDictLocal)
export class FindFirstDataDictLocalResolver {
  @TypeGraphQL.Query(_returns => DataDictLocal, {
    nullable: true
  })
  async findFirstDataDictLocal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstDataDictLocalArgs): Promise<DataDictLocal | null> {
    return getPrismaFromContext(ctx).dataDictLocal.findFirst(args);
  }
}
