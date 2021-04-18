import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseTransferReferralUpdateManyMutationInput } from "../../../inputs/CaseTransferReferralUpdateManyMutationInput";
import { CaseTransferReferralWhereInput } from "../../../inputs/CaseTransferReferralWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCaseTransferReferralArgs {
  @TypeGraphQL.Field(_type => CaseTransferReferralUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseTransferReferralUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CaseTransferReferralWhereInput, {
    nullable: true
  })
  where?: CaseTransferReferralWhereInput | undefined;
}
