import * as TypeGraphQL from "type-graphql";
import { FindUniqueDataDictArgs } from "./args/FindUniqueDataDictArgs";
import { DataDict } from "../../../models/DataDict";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DataDict)
export class FindUniqueDataDictResolver {
  @TypeGraphQL.Query(_returns => DataDict, {
    nullable: true
  })
  async dataDict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueDataDictArgs): Promise<DataDict | null> {
    return getPrismaFromContext(ctx).dataDict.findUnique(args);
  }
}
