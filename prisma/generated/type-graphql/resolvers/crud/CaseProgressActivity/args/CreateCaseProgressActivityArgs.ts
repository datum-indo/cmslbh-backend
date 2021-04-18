import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressActivityCreateInput } from "../../../inputs/CaseProgressActivityCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCaseProgressActivityArgs {
  @TypeGraphQL.Field(_type => CaseProgressActivityCreateInput, {
    nullable: false
  })
  data!: CaseProgressActivityCreateInput;
}
