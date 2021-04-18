import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseConsultationWhereInput } from "../inputs/CaseConsultationWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseConsultationRelationFilter {
  @TypeGraphQL.Field(_type => CaseConsultationWhereInput, {
    nullable: true
  })
  is?: CaseConsultationWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseConsultationWhereInput, {
    nullable: true
  })
  isNot?: CaseConsultationWhereInput | undefined;
}
