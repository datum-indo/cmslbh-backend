import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DataDictCreateInput } from "../../../inputs/DataDictCreateInput";
import { DataDictUpdateInput } from "../../../inputs/DataDictUpdateInput";
import { DataDictWhereUniqueInput } from "../../../inputs/DataDictWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertDataDictArgs {
  @TypeGraphQL.Field(_type => DataDictWhereUniqueInput, {
    nullable: false
  })
  where!: DataDictWhereUniqueInput;

  @TypeGraphQL.Field(_type => DataDictCreateInput, {
    nullable: false
  })
  create!: DataDictCreateInput;

  @TypeGraphQL.Field(_type => DataDictUpdateInput, {
    nullable: false
  })
  update!: DataDictUpdateInput;
}
