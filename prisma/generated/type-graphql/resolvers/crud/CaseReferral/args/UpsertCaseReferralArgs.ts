import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseReferralCreateInput } from "../../../inputs/CaseReferralCreateInput";
import { CaseReferralUpdateInput } from "../../../inputs/CaseReferralUpdateInput";
import { CaseReferralWhereUniqueInput } from "../../../inputs/CaseReferralWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCaseReferralArgs {
  @TypeGraphQL.Field(_type => CaseReferralWhereUniqueInput, {
    nullable: false
  })
  where!: CaseReferralWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseReferralCreateInput, {
    nullable: false
  })
  create!: CaseReferralCreateInput;

  @TypeGraphQL.Field(_type => CaseReferralUpdateInput, {
    nullable: false
  })
  update!: CaseReferralUpdateInput;
}
