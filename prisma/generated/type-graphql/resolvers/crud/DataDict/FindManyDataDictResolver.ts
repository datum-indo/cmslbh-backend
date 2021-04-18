import * as TypeGraphQL from "type-graphql";
import { FindManyDataDictArgs } from "./args/FindManyDataDictArgs";
import { DataDict } from "../../../models/DataDict";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DataDict)
export class FindManyDataDictResolver {
  @TypeGraphQL.Query(_returns => [DataDict], {
    nullable: false
  })
  async dataDicts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyDataDictArgs): Promise<DataDict[]> {
    return getPrismaFromContext(ctx).dataDict.findMany(args);
  }
}
