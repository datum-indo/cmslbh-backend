import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseTransferCreateInput } from "../../../inputs/CaseTransferCreateInput";
import { CaseTransferUpdateInput } from "../../../inputs/CaseTransferUpdateInput";
import { CaseTransferWhereUniqueInput } from "../../../inputs/CaseTransferWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCaseTransferArgs {
  @TypeGraphQL.Field(_type => CaseTransferWhereUniqueInput, {
    nullable: false
  })
  where!: CaseTransferWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseTransferCreateInput, {
    nullable: false
  })
  create!: CaseTransferCreateInput;

  @TypeGraphQL.Field(_type => CaseTransferUpdateInput, {
    nullable: false
  })
  update!: CaseTransferUpdateInput;
}
