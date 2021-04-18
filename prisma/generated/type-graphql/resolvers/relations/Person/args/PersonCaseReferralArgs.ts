import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseReferralOrderByInput } from "../../../inputs/CaseReferralOrderByInput";
import { CaseReferralWhereInput } from "../../../inputs/CaseReferralWhereInput";
import { CaseReferralWhereUniqueInput } from "../../../inputs/CaseReferralWhereUniqueInput";
import { CaseReferralScalarFieldEnum } from "../../../../enums/CaseReferralScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class PersonCaseReferralArgs {
  @TypeGraphQL.Field(_type => CaseReferralWhereInput, {
    nullable: true
  })
  where?: CaseReferralWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CaseReferralOrderByInput], {
    nullable: true
  })
  orderBy?: CaseReferralOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CaseReferralWhereUniqueInput, {
    nullable: true
  })
  cursor?: CaseReferralWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CaseReferralScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "tglTransfer" | "catatan" | "createdBy" | "updatedBy" | "caseId" | "networkId" | "clientId"> | undefined;
}
