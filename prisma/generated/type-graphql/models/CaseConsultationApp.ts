import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CaseConsultation } from "../models/CaseConsultation";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class CaseConsultationApp {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  app_consultation?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  case_consultation_id?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  keterangan?: string | null;

  appConsultation?: User | null;

  caseConsultationId?: CaseConsultation | null;
}
