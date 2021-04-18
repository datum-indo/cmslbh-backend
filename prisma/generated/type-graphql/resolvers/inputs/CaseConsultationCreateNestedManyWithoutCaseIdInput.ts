import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseConsultationCreateOrConnectWithoutCaseIdInput } from "../inputs/CaseConsultationCreateOrConnectWithoutCaseIdInput";
import { CaseConsultationCreateWithoutCaseIdInput } from "../inputs/CaseConsultationCreateWithoutCaseIdInput";
import { CaseConsultationWhereUniqueInput } from "../inputs/CaseConsultationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseConsultationCreateNestedManyWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => [CaseConsultationCreateWithoutCaseIdInput], {
    nullable: true
  })
  create?: CaseConsultationCreateWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationCreateOrConnectWithoutCaseIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseConsultationCreateOrConnectWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseConsultationWhereUniqueInput[] | undefined;
}
