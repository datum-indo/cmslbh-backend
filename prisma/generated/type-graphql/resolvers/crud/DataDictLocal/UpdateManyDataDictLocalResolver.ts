import * as TypeGraphQL from "type-graphql";
import { UpdateManyDataDictLocalArgs } from "./args/UpdateManyDataDictLocalArgs";
import { DataDictLocal } from "../../../models/DataDictLocal";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DataDictLocal)
export class UpdateManyDataDictLocalResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyDataDictLocal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyDataDictLocalArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).dataDictLocal.updateMany(args);
  }
}
