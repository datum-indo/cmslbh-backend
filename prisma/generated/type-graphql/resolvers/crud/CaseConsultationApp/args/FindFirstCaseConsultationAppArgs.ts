import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseConsultationAppOrderByInput } from "../../../inputs/CaseConsultationAppOrderByInput";
import { CaseConsultationAppWhereInput } from "../../../inputs/CaseConsultationAppWhereInput";
import { CaseConsultationAppWhereUniqueInput } from "../../../inputs/CaseConsultationAppWhereUniqueInput";
import { CaseConsultationAppScalarFieldEnum } from "../../../../enums/CaseConsultationAppScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCaseConsultationAppArgs {
  @TypeGraphQL.Field(_type => CaseConsultationAppWhereInput, {
    nullable: true
  })
  where?: CaseConsultationAppWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationAppOrderByInput], {
    nullable: true
  })
  orderBy?: CaseConsultationAppOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CaseConsultationAppWhereUniqueInput, {
    nullable: true
  })
  cursor?: CaseConsultationAppWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationAppScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "app_consultation" | "case_consultation_id" | "keterangan"> | undefined;
}
