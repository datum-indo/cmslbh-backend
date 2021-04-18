import * as TypeGraphQL from "type-graphql";
import { CreateDataDictArgs } from "./args/CreateDataDictArgs";
import { DataDict } from "../../../models/DataDict";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DataDict)
export class CreateDataDictResolver {
  @TypeGraphQL.Mutation(_returns => DataDict, {
    nullable: false
  })
  async createDataDict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateDataDictArgs): Promise<DataDict> {
    return getPrismaFromContext(ctx).dataDict.create(args);
  }
}
