import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DataDictLocalCreateInput } from "../../../inputs/DataDictLocalCreateInput";
import { DataDictLocalUpdateInput } from "../../../inputs/DataDictLocalUpdateInput";
import { DataDictLocalWhereUniqueInput } from "../../../inputs/DataDictLocalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertDataDictLocalArgs {
  @TypeGraphQL.Field(_type => DataDictLocalWhereUniqueInput, {
    nullable: false
  })
  where!: DataDictLocalWhereUniqueInput;

  @TypeGraphQL.Field(_type => DataDictLocalCreateInput, {
    nullable: false
  })
  create!: DataDictLocalCreateInput;

  @TypeGraphQL.Field(_type => DataDictLocalUpdateInput, {
    nullable: false
  })
  update!: DataDictLocalUpdateInput;
}
