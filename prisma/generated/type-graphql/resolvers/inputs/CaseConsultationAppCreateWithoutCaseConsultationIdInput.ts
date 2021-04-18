import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutCaseConsultationAppInput } from "../inputs/UserCreateNestedOneWithoutCaseConsultationAppInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseConsultationAppCreateWithoutCaseConsultationIdInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  keterangan?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCaseConsultationAppInput, {
    nullable: true
  })
  appConsultation?: UserCreateNestedOneWithoutCaseConsultationAppInput | undefined;
}
