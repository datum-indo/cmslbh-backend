import * as TypeGraphQL from "type-graphql";
import { DataDict } from "../../../models/DataDict";
import { DataDictLocal } from "../../../models/DataDictLocal";
import { DataDictDataDictLocalArgs } from "./args/DataDictDataDictLocalArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DataDict)
export class DataDictRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [DataDictLocal], {
    nullable: false
  })
  async DataDictLocal(@TypeGraphQL.Root() dataDict: DataDict, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DataDictDataDictLocalArgs): Promise<DataDictLocal[]> {
    return getPrismaFromContext(ctx).dataDict.findUnique({
      where: {
        fieldNumber: dataDict.fieldNumber,
      },
    }).DataDictLocal(args);
  }
}
