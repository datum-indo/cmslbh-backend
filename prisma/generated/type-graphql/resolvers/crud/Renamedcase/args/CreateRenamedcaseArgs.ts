import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RenamedcaseCreateInput } from "../../../inputs/RenamedcaseCreateInput";

@TypeGraphQL.ArgsType()
export class CreateRenamedcaseArgs {
  @TypeGraphQL.Field(_type => RenamedcaseCreateInput, {
    nullable: false
  })
  data!: RenamedcaseCreateInput;
}
