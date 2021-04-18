import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseConsultationCreateWithoutAppsInput } from "../inputs/CaseConsultationCreateWithoutAppsInput";
import { CaseConsultationWhereUniqueInput } from "../inputs/CaseConsultationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseConsultationCreateOrConnectWithoutAppsInput {
  @TypeGraphQL.Field(_type => CaseConsultationWhereUniqueInput, {
    nullable: false
  })
  where!: CaseConsultationWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseConsultationCreateWithoutAppsInput, {
    nullable: false
  })
  create!: CaseConsultationCreateWithoutAppsInput;
}
