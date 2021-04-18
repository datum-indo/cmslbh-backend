import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseConsultationAppUpdateWithoutAppConsultationInput } from "../inputs/CaseConsultationAppUpdateWithoutAppConsultationInput";
import { CaseConsultationAppWhereUniqueInput } from "../inputs/CaseConsultationAppWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseConsultationAppUpdateWithWhereUniqueWithoutAppConsultationInput {
  @TypeGraphQL.Field(_type => CaseConsultationAppWhereUniqueInput, {
    nullable: false
  })
  where!: CaseConsultationAppWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseConsultationAppUpdateWithoutAppConsultationInput, {
    nullable: false
  })
  data!: CaseConsultationAppUpdateWithoutAppConsultationInput;
}
