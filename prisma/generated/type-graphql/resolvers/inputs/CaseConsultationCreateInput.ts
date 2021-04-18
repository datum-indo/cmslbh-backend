import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseConsultationAppCreateNestedManyWithoutCaseConsultationIdInput } from "../inputs/CaseConsultationAppCreateNestedManyWithoutCaseConsultationIdInput";
import { RenamedcaseCreateNestedOneWithoutConsultationsInput } from "../inputs/RenamedcaseCreateNestedOneWithoutConsultationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseConsultationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  appKonsul?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createdBy?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  isiKonsul?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  harapan?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  saranHukum?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rencanaTindakLanjut?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  judulAktifitas?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ppKonsul?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  tglKonsul?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updatedBy?: string | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateNestedOneWithoutConsultationsInput, {
    nullable: true
  })
  caseId?: RenamedcaseCreateNestedOneWithoutConsultationsInput | undefined;

  @TypeGraphQL.Field(_type => CaseConsultationAppCreateNestedManyWithoutCaseConsultationIdInput, {
    nullable: true
  })
  apps?: CaseConsultationAppCreateNestedManyWithoutCaseConsultationIdInput | undefined;
}
