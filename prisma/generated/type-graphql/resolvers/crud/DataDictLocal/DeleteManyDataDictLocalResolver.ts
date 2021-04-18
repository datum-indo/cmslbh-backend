import * as TypeGraphQL from "type-graphql";
import { DeleteManyDataDictLocalArgs } from "./args/DeleteManyDataDictLocalArgs";
import { DataDictLocal } from "../../../models/DataDictLocal";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DataDictLocal)
export class DeleteManyDataDictLocalResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyDataDictLocal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyDataDictLocalArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).dataDictLocal.deleteMany(args);
  }
}
