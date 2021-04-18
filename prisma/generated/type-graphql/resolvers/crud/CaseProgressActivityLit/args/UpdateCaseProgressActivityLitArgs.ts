import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressActivityLitUpdateInput } from "../../../inputs/CaseProgressActivityLitUpdateInput";
import { CaseProgressActivityLitWhereUniqueInput } from "../../../inputs/CaseProgressActivityLitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCaseProgressActivityLitArgs {
  @TypeGraphQL.Field(_type => CaseProgressActivityLitUpdateInput, {
    nullable: false
  })
  data!: CaseProgressActivityLitUpdateInput;

  @TypeGraphQL.Field(_type => CaseProgressActivityLitWhereUniqueInput, {
    nullable: false
  })
  where!: CaseProgressActivityLitWhereUniqueInput;
}
