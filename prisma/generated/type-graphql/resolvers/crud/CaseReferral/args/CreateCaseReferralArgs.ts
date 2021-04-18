import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseReferralCreateInput } from "../../../inputs/CaseReferralCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCaseReferralArgs {
  @TypeGraphQL.Field(_type => CaseReferralCreateInput, {
    nullable: false
  })
  data!: CaseReferralCreateInput;
}
