import * as TypeGraphQL from "type-graphql";
import { DeleteDataDictLocalArgs } from "./args/DeleteDataDictLocalArgs";
import { DataDictLocal } from "../../../models/DataDictLocal";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DataDictLocal)
export class DeleteDataDictLocalResolver {
  @TypeGraphQL.Mutation(_returns => DataDictLocal, {
    nullable: true
  })
  async deleteDataDictLocal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteDataDictLocalArgs): Promise<DataDictLocal | null> {
    return getPrismaFromContext(ctx).dataDictLocal.delete(args);
  }
}
