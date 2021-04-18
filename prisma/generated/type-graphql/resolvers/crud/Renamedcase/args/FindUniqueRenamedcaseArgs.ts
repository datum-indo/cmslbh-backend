import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RenamedcaseWhereUniqueInput } from "../../../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueRenamedcaseArgs {
  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: false
  })
  where!: RenamedcaseWhereUniqueInput;
}
