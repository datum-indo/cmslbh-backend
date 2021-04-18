import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApplicationOrderByInput } from "../../../inputs/ApplicationOrderByInput";
import { ApplicationWhereInput } from "../../../inputs/ApplicationWhereInput";
import { ApplicationWhereUniqueInput } from "../../../inputs/ApplicationWhereUniqueInput";
import { ApplicationScalarFieldEnum } from "../../../../enums/ApplicationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstApplicationArgs {
  @TypeGraphQL.Field(_type => ApplicationWhereInput, {
    nullable: true
  })
  where?: ApplicationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ApplicationOrderByInput], {
    nullable: true
  })
  orderBy?: ApplicationOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: true
  })
  cursor?: ApplicationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ApplicationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "createdBy" | "dudukPerara" | "infoLbh" | "jumlahPenerimaManfaat" | "konfirmasiData" | "noReg" | "pernahKlien" | "pernahPpLain" | "ppLain" | "regDate" | "relasiWakilClient" | "setujuAdvokasi" | "statusPerwakilan" | "updatedAt" | "updatedBy" | "waktuPernahKlien" | "whyLbh" | "tahap" | "status" | "wakil_Id" | "case_applicationTocase"> | undefined;
}
