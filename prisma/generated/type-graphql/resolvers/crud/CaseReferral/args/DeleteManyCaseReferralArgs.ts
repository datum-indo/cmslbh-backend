import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseReferralWhereInput } from "../../../inputs/CaseReferralWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCaseReferralArgs {
  @TypeGraphQL.Field(_type => CaseReferralWhereInput, {
    nullable: true
  })
  where?: CaseReferralWhereInput | undefined;
}
