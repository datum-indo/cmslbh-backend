import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseTransferReferralWhereInput } from "../../../inputs/CaseTransferReferralWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCaseTransferReferralArgs {
  @TypeGraphQL.Field(_type => CaseTransferReferralWhereInput, {
    nullable: true
  })
  where?: CaseTransferReferralWhereInput | undefined;
}
