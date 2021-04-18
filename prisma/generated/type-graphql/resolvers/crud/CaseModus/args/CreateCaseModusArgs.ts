import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseModusCreateInput } from "../../../inputs/CaseModusCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCaseModusArgs {
  @TypeGraphQL.Field(_type => CaseModusCreateInput, {
    nullable: false
  })
  data!: CaseModusCreateInput;
}
