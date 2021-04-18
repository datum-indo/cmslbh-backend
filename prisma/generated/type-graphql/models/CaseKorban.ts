import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Person } from "../models/Person";
import { Renamedcase } from "../models/Renamedcase";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class CaseKorban {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  case_id?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  person_id?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  keterangan?: string | null;

  caseId?: Renamedcase | null;

  personId?: Person | null;
}
