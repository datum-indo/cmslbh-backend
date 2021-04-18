import * as TypeGraphQL from "type-graphql";
import { FindManyDataDictLocalArgs } from "./args/FindManyDataDictLocalArgs";
import { DataDictLocal } from "../../../models/DataDictLocal";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DataDictLocal)
export class FindManyDataDictLocalResolver {
  @TypeGraphQL.Query(_returns => [DataDictLocal], {
    nullable: false
  })
  async dataDictLocals(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyDataDictLocalArgs): Promise<DataDictLocal[]> {
    return getPrismaFromContext(ctx).dataDictLocal.findMany(args);
  }
}
