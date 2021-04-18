import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseConsultationCreateNestedOneWithoutAppsInput } from "../inputs/CaseConsultationCreateNestedOneWithoutAppsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseConsultationAppCreateWithoutAppConsultationInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  keterangan?: string | undefined;

  @TypeGraphQL.Field(_type => CaseConsultationCreateNestedOneWithoutAppsInput, {
    nullable: true
  })
  caseConsultationId?: CaseConsultationCreateNestedOneWithoutAppsInput | undefined;
}
