import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseConsultationAppWhereInput } from "../inputs/CaseConsultationAppWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseConsultationAppListRelationFilter {
  @TypeGraphQL.Field(_type => CaseConsultationAppWhereInput, {
    nullable: true
  })
  every?: CaseConsultationAppWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseConsultationAppWhereInput, {
    nullable: true
  })
  some?: CaseConsultationAppWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseConsultationAppWhereInput, {
    nullable: true
  })
  none?: CaseConsultationAppWhereInput | undefined;
}
