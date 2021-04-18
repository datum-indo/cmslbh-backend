import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressActivityNonlitCreateInput } from "../../../inputs/CaseProgressActivityNonlitCreateInput";
import { CaseProgressActivityNonlitUpdateInput } from "../../../inputs/CaseProgressActivityNonlitUpdateInput";
import { CaseProgressActivityNonlitWhereUniqueInput } from "../../../inputs/CaseProgressActivityNonlitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCaseProgressActivityNonlitArgs {
  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitWhereUniqueInput, {
    nullable: false
  })
  where!: CaseProgressActivityNonlitWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitCreateInput, {
    nullable: false
  })
  create!: CaseProgressActivityNonlitCreateInput;

  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitUpdateInput, {
    nullable: false
  })
  update!: CaseProgressActivityNonlitUpdateInput;
}
