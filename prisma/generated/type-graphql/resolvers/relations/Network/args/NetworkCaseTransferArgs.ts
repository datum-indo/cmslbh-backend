import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseTransferOrderByInput } from "../../../inputs/CaseTransferOrderByInput";
import { CaseTransferWhereInput } from "../../../inputs/CaseTransferWhereInput";
import { CaseTransferWhereUniqueInput } from "../../../inputs/CaseTransferWhereUniqueInput";
import { CaseTransferScalarFieldEnum } from "../../../../enums/CaseTransferScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class NetworkCaseTransferArgs {
  @TypeGraphQL.Field(_type => CaseTransferWhereInput, {
    nullable: true
  })
  where?: CaseTransferWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferOrderByInput], {
    nullable: true
  })
  orderBy?: CaseTransferOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CaseTransferWhereUniqueInput, {
    nullable: true
  })
  cursor?: CaseTransferWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "tglTransfer" | "catatan" | "createdBy" | "updatedBy" | "networkId"> | undefined;
}
