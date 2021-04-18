import * as TypeGraphQL from "type-graphql";
import { DeleteDataDictArgs } from "./args/DeleteDataDictArgs";
import { DataDict } from "../../../models/DataDict";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DataDict)
export class DeleteDataDictResolver {
  @TypeGraphQL.Mutation(_returns => DataDict, {
    nullable: true
  })
  async deleteDataDict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteDataDictArgs): Promise<DataDict | null> {
    return getPrismaFromContext(ctx).dataDict.delete(args);
  }
}
