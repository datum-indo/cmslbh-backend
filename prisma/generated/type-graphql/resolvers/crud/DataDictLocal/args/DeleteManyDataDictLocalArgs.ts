import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DataDictLocalWhereInput } from "../../../inputs/DataDictLocalWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDataDictLocalArgs {
  @TypeGraphQL.Field(_type => DataDictLocalWhereInput, {
    nullable: true
  })
  where?: DataDictLocalWhereInput | undefined;
}
