import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseReferralUpdateManyMutationInput } from "../../../inputs/CaseReferralUpdateManyMutationInput";
import { CaseReferralWhereInput } from "../../../inputs/CaseReferralWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCaseReferralArgs {
  @TypeGraphQL.Field(_type => CaseReferralUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseReferralUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CaseReferralWhereInput, {
    nullable: true
  })
  where?: CaseReferralWhereInput | undefined;
}
