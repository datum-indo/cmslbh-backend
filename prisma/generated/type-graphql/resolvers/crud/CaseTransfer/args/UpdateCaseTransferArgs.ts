import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseTransferUpdateInput } from "../../../inputs/CaseTransferUpdateInput";
import { CaseTransferWhereUniqueInput } from "../../../inputs/CaseTransferWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCaseTransferArgs {
  @TypeGraphQL.Field(_type => CaseTransferUpdateInput, {
    nullable: false
  })
  data!: CaseTransferUpdateInput;

  @TypeGraphQL.Field(_type => CaseTransferWhereUniqueInput, {
    nullable: false
  })
  where!: CaseTransferWhereUniqueInput;
}
