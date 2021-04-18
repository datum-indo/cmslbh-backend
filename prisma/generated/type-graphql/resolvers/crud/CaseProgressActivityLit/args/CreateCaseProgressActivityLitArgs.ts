import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressActivityLitCreateInput } from "../../../inputs/CaseProgressActivityLitCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCaseProgressActivityLitArgs {
  @TypeGraphQL.Field(_type => CaseProgressActivityLitCreateInput, {
    nullable: false
  })
  data!: CaseProgressActivityLitCreateInput;
}
