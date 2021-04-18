import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Application } from "../models/Application";
import { Client } from "../models/Client";
import { LogRequestApp } from "../models/LogRequestApp";
import { Network } from "../models/Network";
import { Person } from "../models/Person";
import { Renamedcase } from "../models/Renamedcase";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class LogRequest {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ID!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  isiRequest?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  jenisRequest?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statusRequest?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tanggapanRequest?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tanggapanRequestIsi?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  tglExpired?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  tglRequest?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  tglRespon?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  person?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  case?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  request_by?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  application?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  network?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  request_to?: number | null;

  applicationId?: Application | null;

  caseId?: Renamedcase | null;

  networkId?: Network | null;

  personId?: Person | null;

  requestBy?: User | null;

  requestTo?: User | null;

  pp?: LogRequestApp[];

  Client?: Client[];
}
