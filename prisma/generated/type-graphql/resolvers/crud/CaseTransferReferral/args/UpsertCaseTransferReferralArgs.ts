import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseTransferReferralCreateInput } from "../../../inputs/CaseTransferReferralCreateInput";
import { CaseTransferReferralUpdateInput } from "../../../inputs/CaseTransferReferralUpdateInput";
import { CaseTransferReferralWhereUniqueInput } from "../../../inputs/CaseTransferReferralWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCaseTransferReferralArgs {
  @TypeGraphQL.Field(_type => CaseTransferReferralWhereUniqueInput, {
    nullable: false
  })
  where!: CaseTransferReferralWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseTransferReferralCreateInput, {
    nullable: false
  })
  create!: CaseTransferReferralCreateInput;

  @TypeGraphQL.Field(_type => CaseTransferReferralUpdateInput, {
    nullable: false
  })
  update!: CaseTransferReferralUpdateInput;
}
