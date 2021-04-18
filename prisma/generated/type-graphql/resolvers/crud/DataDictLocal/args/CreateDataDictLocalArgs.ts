import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DataDictLocalCreateInput } from "../../../inputs/DataDictLocalCreateInput";

@TypeGraphQL.ArgsType()
export class CreateDataDictLocalArgs {
  @TypeGraphQL.Field(_type => DataDictLocalCreateInput, {
    nullable: false
  })
  data!: DataDictLocalCreateInput;
}
