import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Network } from "../models/Network";
import { Person } from "../models/Person";
import { Renamedcase } from "../models/Renamedcase";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class CaseReferral {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  tglTransfer?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  catatan?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createdBy?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updatedBy?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  caseId?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  networkId?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  clientId?: number | null;

  case?: Renamedcase | null;

  client?: Person | null;

  network?: Network | null;
}
