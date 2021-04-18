import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseConsultationAppCreateWithoutAppConsultationInput } from "../inputs/CaseConsultationAppCreateWithoutAppConsultationInput";
import { CaseConsultationAppUpdateWithoutAppConsultationInput } from "../inputs/CaseConsultationAppUpdateWithoutAppConsultationInput";
import { CaseConsultationAppWhereUniqueInput } from "../inputs/CaseConsultationAppWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseConsultationAppUpsertWithWhereUniqueWithoutAppConsultationInput {
  @TypeGraphQL.Field(_type => CaseConsultationAppWhereUniqueInput, {
    nullable: false
  })
  where!: CaseConsultationAppWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseConsultationAppUpdateWithoutAppConsultationInput, {
    nullable: false
  })
  update!: CaseConsultationAppUpdateWithoutAppConsultationInput;

  @TypeGraphQL.Field(_type => CaseConsultationAppCreateWithoutAppConsultationInput, {
    nullable: false
  })
  create!: CaseConsultationAppCreateWithoutAppConsultationInput;
}
