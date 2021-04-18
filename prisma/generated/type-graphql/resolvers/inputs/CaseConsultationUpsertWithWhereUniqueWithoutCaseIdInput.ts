import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseConsultationCreateWithoutCaseIdInput } from "../inputs/CaseConsultationCreateWithoutCaseIdInput";
import { CaseConsultationUpdateWithoutCaseIdInput } from "../inputs/CaseConsultationUpdateWithoutCaseIdInput";
import { CaseConsultationWhereUniqueInput } from "../inputs/CaseConsultationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseConsultationUpsertWithWhereUniqueWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CaseConsultationWhereUniqueInput, {
    nullable: false
  })
  where!: CaseConsultationWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseConsultationUpdateWithoutCaseIdInput, {
    nullable: false
  })
  update!: CaseConsultationUpdateWithoutCaseIdInput;

  @TypeGraphQL.Field(_type => CaseConsultationCreateWithoutCaseIdInput, {
    nullable: false
  })
  create!: CaseConsultationCreateWithoutCaseIdInput;
}
