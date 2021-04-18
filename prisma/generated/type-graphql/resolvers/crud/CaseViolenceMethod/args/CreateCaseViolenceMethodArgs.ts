import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseViolenceMethodCreateInput } from "../../../inputs/CaseViolenceMethodCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCaseViolenceMethodArgs {
  @TypeGraphQL.Field(_type => CaseViolenceMethodCreateInput, {
    nullable: false
  })
  data!: CaseViolenceMethodCreateInput;
}
