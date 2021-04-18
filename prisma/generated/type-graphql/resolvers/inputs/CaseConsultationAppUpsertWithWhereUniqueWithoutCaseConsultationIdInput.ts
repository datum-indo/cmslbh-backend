import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseConsultationAppCreateWithoutCaseConsultationIdInput } from "../inputs/CaseConsultationAppCreateWithoutCaseConsultationIdInput";
import { CaseConsultationAppUpdateWithoutCaseConsultationIdInput } from "../inputs/CaseConsultationAppUpdateWithoutCaseConsultationIdInput";
import { CaseConsultationAppWhereUniqueInput } from "../inputs/CaseConsultationAppWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseConsultationAppUpsertWithWhereUniqueWithoutCaseConsultationIdInput {
  @TypeGraphQL.Field(_type => CaseConsultationAppWhereUniqueInput, {
    nullable: false
  })
  where!: CaseConsultationAppWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseConsultationAppUpdateWithoutCaseConsultationIdInput, {
    nullable: false
  })
  update!: CaseConsultationAppUpdateWithoutCaseConsultationIdInput;

  @TypeGraphQL.Field(_type => CaseConsultationAppCreateWithoutCaseConsultationIdInput, {
    nullable: false
  })
  create!: CaseConsultationAppCreateWithoutCaseConsultationIdInput;
}
