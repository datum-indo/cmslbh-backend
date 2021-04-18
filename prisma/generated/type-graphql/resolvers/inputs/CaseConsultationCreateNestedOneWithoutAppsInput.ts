import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseConsultationCreateOrConnectWithoutAppsInput } from "../inputs/CaseConsultationCreateOrConnectWithoutAppsInput";
import { CaseConsultationCreateWithoutAppsInput } from "../inputs/CaseConsultationCreateWithoutAppsInput";
import { CaseConsultationWhereUniqueInput } from "../inputs/CaseConsultationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseConsultationCreateNestedOneWithoutAppsInput {
  @TypeGraphQL.Field(_type => CaseConsultationCreateWithoutAppsInput, {
    nullable: true
  })
  create?: CaseConsultationCreateWithoutAppsInput | undefined;

  @TypeGraphQL.Field(_type => CaseConsultationCreateOrConnectWithoutAppsInput, {
    nullable: true
  })
  connectOrCreate?: CaseConsultationCreateOrConnectWithoutAppsInput | undefined;

  @TypeGraphQL.Field(_type => CaseConsultationWhereUniqueInput, {
    nullable: true
  })
  connect?: CaseConsultationWhereUniqueInput | undefined;
}
