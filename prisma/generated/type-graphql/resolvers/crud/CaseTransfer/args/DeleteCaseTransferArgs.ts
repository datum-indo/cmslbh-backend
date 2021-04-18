import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseTransferWhereUniqueInput } from "../../../inputs/CaseTransferWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCaseTransferArgs {
  @TypeGraphQL.Field(_type => CaseTransferWhereUniqueInput, {
    nullable: false
  })
  where!: CaseTransferWhereUniqueInput;
}
