import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressActivityNonlitUpdateInput } from "../../../inputs/CaseProgressActivityNonlitUpdateInput";
import { CaseProgressActivityNonlitWhereUniqueInput } from "../../../inputs/CaseProgressActivityNonlitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCaseProgressActivityNonlitArgs {
  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitUpdateInput, {
    nullable: false
  })
  data!: CaseProgressActivityNonlitUpdateInput;

  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitWhereUniqueInput, {
    nullable: false
  })
  where!: CaseProgressActivityNonlitWhereUniqueInput;
}
