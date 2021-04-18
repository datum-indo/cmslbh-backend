import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseConsultationOrderByInput } from "../../../inputs/CaseConsultationOrderByInput";
import { CaseConsultationWhereInput } from "../../../inputs/CaseConsultationWhereInput";
import { CaseConsultationWhereUniqueInput } from "../../../inputs/CaseConsultationWhereUniqueInput";
import { CaseConsultationScalarFieldEnum } from "../../../../enums/CaseConsultationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class RenamedcaseConsultationsArgs {
  @TypeGraphQL.Field(_type => CaseConsultationWhereInput, {
    nullable: true
  })
  where?: CaseConsultationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationOrderByInput], {
    nullable: true
  })
  orderBy?: CaseConsultationOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CaseConsultationWhereUniqueInput, {
    nullable: true
  })
  cursor?: CaseConsultationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "appKonsul" | "createdAt" | "createdBy" | "isiKonsul" | "harapan" | "saranHukum" | "rencanaTindakLanjut" | "judulAktifitas" | "ppKonsul" | "tglKonsul" | "updatedAt" | "updatedBy" | "case_id"> | undefined;
}
