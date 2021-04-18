import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseClassificationCreateInput } from "../../../inputs/CaseClassificationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCaseClassificationArgs {
  @TypeGraphQL.Field(_type => CaseClassificationCreateInput, {
    nullable: false
  })
  data!: CaseClassificationCreateInput;
}
