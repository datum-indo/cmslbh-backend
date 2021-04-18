import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseConsultationCreateWithoutAppsInput } from "../inputs/CaseConsultationCreateWithoutAppsInput";
import { CaseConsultationUpdateWithoutAppsInput } from "../inputs/CaseConsultationUpdateWithoutAppsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseConsultationUpsertWithoutAppsInput {
  @TypeGraphQL.Field(_type => CaseConsultationUpdateWithoutAppsInput, {
    nullable: false
  })
  update!: CaseConsultationUpdateWithoutAppsInput;

  @TypeGraphQL.Field(_type => CaseConsultationCreateWithoutAppsInput, {
    nullable: false
  })
  create!: CaseConsultationCreateWithoutAppsInput;
}
