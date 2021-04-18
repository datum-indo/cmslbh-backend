import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DataDictLocalWhereUniqueInput } from "../../../inputs/DataDictLocalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueDataDictLocalArgs {
  @TypeGraphQL.Field(_type => DataDictLocalWhereUniqueInput, {
    nullable: false
  })
  where!: DataDictLocalWhereUniqueInput;
}
