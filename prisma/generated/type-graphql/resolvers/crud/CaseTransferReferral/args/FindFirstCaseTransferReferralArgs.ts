import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseTransferReferralOrderByInput } from "../../../inputs/CaseTransferReferralOrderByInput";
import { CaseTransferReferralWhereInput } from "../../../inputs/CaseTransferReferralWhereInput";
import { CaseTransferReferralWhereUniqueInput } from "../../../inputs/CaseTransferReferralWhereUniqueInput";
import { CaseTransferReferralScalarFieldEnum } from "../../../../enums/CaseTransferReferralScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCaseTransferReferralArgs {
  @TypeGraphQL.Field(_type => CaseTransferReferralWhereInput, {
    nullable: true
  })
  where?: CaseTransferReferralWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferReferralOrderByInput], {
    nullable: true
  })
  orderBy?: CaseTransferReferralOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CaseTransferReferralWhereUniqueInput, {
    nullable: true
  })
  cursor?: CaseTransferReferralWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferReferralScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "catatan" | "createdAt" | "createdBy" | "document" | "jenisTransferReferral" | "networkId" | "tglTransferReferral" | "updatedAt" | "updatedBy" | "case_id"> | undefined;
}
