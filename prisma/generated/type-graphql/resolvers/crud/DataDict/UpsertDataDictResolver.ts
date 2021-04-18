import * as TypeGraphQL from "type-graphql";
import { UpsertDataDictArgs } from "./args/UpsertDataDictArgs";
import { DataDict } from "../../../models/DataDict";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DataDict)
export class UpsertDataDictResolver {
  @TypeGraphQL.Mutation(_returns => DataDict, {
    nullable: false
  })
  async upsertDataDict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertDataDictArgs): Promise<DataDict> {
    return getPrismaFromContext(ctx).dataDict.upsert(args);
  }
}
