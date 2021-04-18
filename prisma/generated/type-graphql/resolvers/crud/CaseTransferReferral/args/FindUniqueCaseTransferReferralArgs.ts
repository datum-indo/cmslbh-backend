import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseTransferReferralWhereUniqueInput } from "../../../inputs/CaseTransferReferralWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCaseTransferReferralArgs {
  @TypeGraphQL.Field(_type => CaseTransferReferralWhereUniqueInput, {
    nullable: false
  })
  where!: CaseTransferReferralWhereUniqueInput;
}
