import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseConsultationCreateNestedOneWithoutAppsInput } from "../inputs/CaseConsultationCreateNestedOneWithoutAppsInput";
import { UserCreateNestedOneWithoutCaseConsultationAppInput } from "../inputs/UserCreateNestedOneWithoutCaseConsultationAppInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseConsultationAppCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  keterangan?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCaseConsultationAppInput, {
    nullable: true
  })
  appConsultation?: UserCreateNestedOneWithoutCaseConsultationAppInput | undefined;

  @TypeGraphQL.Field(_type => CaseConsultationCreateNestedOneWithoutAppsInput, {
    nullable: true
  })
  caseConsultationId?: CaseConsultationCreateNestedOneWithoutAppsInput | undefined;
}
