import * as TypeGraphQL from "type-graphql";
import { DeleteManyDataDictArgs } from "./args/DeleteManyDataDictArgs";
import { DataDict } from "../../../models/DataDict";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DataDict)
export class DeleteManyDataDictResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyDataDict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyDataDictArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).dataDict.deleteMany(args);
  }
}
