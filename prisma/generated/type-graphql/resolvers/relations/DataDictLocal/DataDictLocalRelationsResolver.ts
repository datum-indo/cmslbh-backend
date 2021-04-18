import * as TypeGraphQL from "type-graphql";
import { DataDict } from "../../../models/DataDict";
import { DataDictLocal } from "../../../models/DataDictLocal";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DataDictLocal)
export class DataDictLocalRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => DataDict, {
    nullable: true
  })
  async DataDict(@TypeGraphQL.Root() dataDictLocal: DataDictLocal, @TypeGraphQL.Ctx() ctx: any): Promise<DataDict | null> {
    return getPrismaFromContext(ctx).dataDictLocal.findUnique({
      where: {
        id: dataDictLocal.id,
      },
    }).DataDict({});
  }
}
