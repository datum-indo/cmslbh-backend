import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DataDictUpdateInput } from "../../../inputs/DataDictUpdateInput";
import { DataDictWhereUniqueInput } from "../../../inputs/DataDictWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateDataDictArgs {
  @TypeGraphQL.Field(_type => DataDictUpdateInput, {
    nullable: false
  })
  data!: DataDictUpdateInput;

  @TypeGraphQL.Field(_type => DataDictWhereUniqueInput, {
    nullable: false
  })
  where!: DataDictWhereUniqueInput;
}
