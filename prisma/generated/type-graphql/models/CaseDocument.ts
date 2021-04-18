import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Renamedcase } from "../models/Renamedcase";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class CaseDocument {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createdBy?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  jenisDokumen?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  judulDokumen?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  keterangan?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  link?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  filename?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updatedBy?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  caseId?: number | null;

  case?: Renamedcase | null;
}
