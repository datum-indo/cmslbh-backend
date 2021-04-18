import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DataDictCreateInput } from "../../../inputs/DataDictCreateInput";

@TypeGraphQL.ArgsType()
export class CreateDataDictArgs {
  @TypeGraphQL.Field(_type => DataDictCreateInput, {
    nullable: false
  })
  data!: DataDictCreateInput;
}
