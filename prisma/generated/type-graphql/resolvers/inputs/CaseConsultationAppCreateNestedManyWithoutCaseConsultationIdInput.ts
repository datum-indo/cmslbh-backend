import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseConsultationAppCreateOrConnectWithoutCaseConsultationIdInput } from "../inputs/CaseConsultationAppCreateOrConnectWithoutCaseConsultationIdInput";
import { CaseConsultationAppCreateWithoutCaseConsultationIdInput } from "../inputs/CaseConsultationAppCreateWithoutCaseConsultationIdInput";
import { CaseConsultationAppWhereUniqueInput } from "../inputs/CaseConsultationAppWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseConsultationAppCreateNestedManyWithoutCaseConsultationIdInput {
  @TypeGraphQL.Field(_type => [CaseConsultationAppCreateWithoutCaseConsultationIdInput], {
    nullable: true
  })
  create?: CaseConsultationAppCreateWithoutCaseConsultationIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationAppCreateOrConnectWithoutCaseConsultationIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseConsultationAppCreateOrConnectWithoutCaseConsultationIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationAppWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseConsultationAppWhereUniqueInput[] | undefined;
}
