import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DataDictWhereInput } from "../../../inputs/DataDictWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDataDictArgs {
  @TypeGraphQL.Field(_type => DataDictWhereInput, {
    nullable: true
  })
  where?: DataDictWhereInput | undefined;
}
