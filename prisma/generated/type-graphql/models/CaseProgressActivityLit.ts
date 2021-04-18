import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CaseProgressActivity } from "../models/CaseProgressActivity";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class CaseProgressActivityLit {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  kodeMt?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  case_progress_activity_id?: number | null;

  caseProgressActivityId?: CaseProgressActivity | null;
}
