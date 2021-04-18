import * as TypeGraphQL from "type-graphql";
import { UpdateDataDictArgs } from "./args/UpdateDataDictArgs";
import { DataDict } from "../../../models/DataDict";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DataDict)
export class UpdateDataDictResolver {
  @TypeGraphQL.Mutation(_returns => DataDict, {
    nullable: true
  })
  async updateDataDict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateDataDictArgs): Promise<DataDict | null> {
    return getPrismaFromContext(ctx).dataDict.update(args);
  }
}
