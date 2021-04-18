import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressActivityNonlitWhereUniqueInput } from "../../../inputs/CaseProgressActivityNonlitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCaseProgressActivityNonlitArgs {
  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitWhereUniqueInput, {
    nullable: false
  })
  where!: CaseProgressActivityNonlitWhereUniqueInput;
}
