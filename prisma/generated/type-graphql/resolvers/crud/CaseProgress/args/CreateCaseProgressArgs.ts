import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressCreateInput } from "../../../inputs/CaseProgressCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCaseProgressArgs {
  @TypeGraphQL.Field(_type => CaseProgressCreateInput, {
    nullable: false
  })
  data!: CaseProgressCreateInput;
}
