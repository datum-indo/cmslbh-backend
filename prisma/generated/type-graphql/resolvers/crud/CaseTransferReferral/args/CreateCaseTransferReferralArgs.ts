import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseTransferReferralCreateInput } from "../../../inputs/CaseTransferReferralCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCaseTransferReferralArgs {
  @TypeGraphQL.Field(_type => CaseTransferReferralCreateInput, {
    nullable: false
  })
  data!: CaseTransferReferralCreateInput;
}
