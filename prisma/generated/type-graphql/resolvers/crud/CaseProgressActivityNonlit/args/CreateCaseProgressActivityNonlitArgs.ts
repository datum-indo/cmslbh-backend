import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressActivityNonlitCreateInput } from "../../../inputs/CaseProgressActivityNonlitCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCaseProgressActivityNonlitArgs {
  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitCreateInput, {
    nullable: false
  })
  data!: CaseProgressActivityNonlitCreateInput;
}
