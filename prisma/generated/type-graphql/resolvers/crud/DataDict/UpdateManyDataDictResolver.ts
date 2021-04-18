import * as TypeGraphQL from "type-graphql";
import { UpdateManyDataDictArgs } from "./args/UpdateManyDataDictArgs";
import { DataDict } from "../../../models/DataDict";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DataDict)
export class UpdateManyDataDictResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyDataDict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyDataDictArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).dataDict.updateMany(args);
  }
}
