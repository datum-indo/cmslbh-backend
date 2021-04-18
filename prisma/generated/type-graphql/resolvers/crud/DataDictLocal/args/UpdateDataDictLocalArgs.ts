import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DataDictLocalUpdateInput } from "../../../inputs/DataDictLocalUpdateInput";
import { DataDictLocalWhereUniqueInput } from "../../../inputs/DataDictLocalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateDataDictLocalArgs {
  @TypeGraphQL.Field(_type => DataDictLocalUpdateInput, {
    nullable: false
  })
  data!: DataDictLocalUpdateInput;

  @TypeGraphQL.Field(_type => DataDictLocalWhereUniqueInput, {
    nullable: false
  })
  where!: DataDictLocalWhereUniqueInput;
}
