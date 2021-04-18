import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseKorbanCreateInput } from "../../../inputs/CaseKorbanCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCaseKorbanArgs {
  @TypeGraphQL.Field(_type => CaseKorbanCreateInput, {
    nullable: false
  })
  data!: CaseKorbanCreateInput;
}
