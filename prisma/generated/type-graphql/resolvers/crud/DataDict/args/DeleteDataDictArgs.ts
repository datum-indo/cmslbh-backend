import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DataDictWhereUniqueInput } from "../../../inputs/DataDictWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteDataDictArgs {
  @TypeGraphQL.Field(_type => DataDictWhereUniqueInput, {
    nullable: false
  })
  where!: DataDictWhereUniqueInput;
}
