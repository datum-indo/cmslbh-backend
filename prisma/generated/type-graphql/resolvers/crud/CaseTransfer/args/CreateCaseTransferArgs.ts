import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseTransferCreateInput } from "../../../inputs/CaseTransferCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCaseTransferArgs {
  @TypeGraphQL.Field(_type => CaseTransferCreateInput, {
    nullable: false
  })
  data!: CaseTransferCreateInput;
}
