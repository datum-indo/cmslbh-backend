import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseConsultationScalarWhereInput } from "../inputs/CaseConsultationScalarWhereInput";
import { CaseConsultationUpdateManyMutationInput } from "../inputs/CaseConsultationUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseConsultationUpdateManyWithWhereWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CaseConsultationScalarWhereInput, {
    nullable: false
  })
  where!: CaseConsultationScalarWhereInput;

  @TypeGraphQL.Field(_type => CaseConsultationUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseConsultationUpdateManyMutationInput;
}
