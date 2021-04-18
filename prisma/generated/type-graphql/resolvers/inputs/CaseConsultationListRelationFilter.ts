import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseConsultationWhereInput } from "../inputs/CaseConsultationWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseConsultationListRelationFilter {
  @TypeGraphQL.Field(_type => CaseConsultationWhereInput, {
    nullable: true
  })
  every?: CaseConsultationWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseConsultationWhereInput, {
    nullable: true
  })
  some?: CaseConsultationWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseConsultationWhereInput, {
    nullable: true
  })
  none?: CaseConsultationWhereInput | undefined;
}
