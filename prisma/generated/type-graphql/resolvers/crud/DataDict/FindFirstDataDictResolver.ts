import * as TypeGraphQL from "type-graphql";
import { FindFirstDataDictArgs } from "./args/FindFirstDataDictArgs";
import { DataDict } from "../../../models/DataDict";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DataDict)
export class FindFirstDataDictResolver {
  @TypeGraphQL.Query(_returns => DataDict, {
    nullable: true
  })
  async findFirstDataDict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstDataDictArgs): Promise<DataDict | null> {
    return getPrismaFromContext(ctx).dataDict.findFirst(args);
  }
}
