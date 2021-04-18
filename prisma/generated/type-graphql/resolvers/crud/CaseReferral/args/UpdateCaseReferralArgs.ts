import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseReferralUpdateInput } from "../../../inputs/CaseReferralUpdateInput";
import { CaseReferralWhereUniqueInput } from "../../../inputs/CaseReferralWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCaseReferralArgs {
  @TypeGraphQL.Field(_type => CaseReferralUpdateInput, {
    nullable: false
  })
  data!: CaseReferralUpdateInput;

  @TypeGraphQL.Field(_type => CaseReferralWhereUniqueInput, {
    nullable: false
  })
  where!: CaseReferralWhereUniqueInput;
}
