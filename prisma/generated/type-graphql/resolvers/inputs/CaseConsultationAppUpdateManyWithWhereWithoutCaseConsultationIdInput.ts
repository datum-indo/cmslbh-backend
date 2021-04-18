import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseConsultationAppScalarWhereInput } from "../inputs/CaseConsultationAppScalarWhereInput";
import { CaseConsultationAppUpdateManyMutationInput } from "../inputs/CaseConsultationAppUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseConsultationAppUpdateManyWithWhereWithoutCaseConsultationIdInput {
  @TypeGraphQL.Field(_type => CaseConsultationAppScalarWhereInput, {
    nullable: false
  })
  where!: CaseConsultationAppScalarWhereInput;

  @TypeGraphQL.Field(_type => CaseConsultationAppUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseConsultationAppUpdateManyMutationInput;
}
