import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseReferralWhereUniqueInput } from "../../../inputs/CaseReferralWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCaseReferralArgs {
  @TypeGraphQL.Field(_type => CaseReferralWhereUniqueInput, {
    nullable: false
  })
  where!: CaseReferralWhereUniqueInput;
}
