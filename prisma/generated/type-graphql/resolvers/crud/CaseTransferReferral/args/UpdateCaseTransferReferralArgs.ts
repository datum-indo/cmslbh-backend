import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseTransferReferralUpdateInput } from "../../../inputs/CaseTransferReferralUpdateInput";
import { CaseTransferReferralWhereUniqueInput } from "../../../inputs/CaseTransferReferralWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCaseTransferReferralArgs {
  @TypeGraphQL.Field(_type => CaseTransferReferralUpdateInput, {
    nullable: false
  })
  data!: CaseTransferReferralUpdateInput;

  @TypeGraphQL.Field(_type => CaseTransferReferralWhereUniqueInput, {
    nullable: false
  })
  where!: CaseTransferReferralWhereUniqueInput;
}
