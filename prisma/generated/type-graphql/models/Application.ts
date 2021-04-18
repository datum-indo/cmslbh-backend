import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Client } from "../models/Client";
import { LogRequest } from "../models/LogRequest";
import { Person } from "../models/Person";
import { Renamedcase } from "../models/Renamedcase";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Application {
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
  dudukPerara?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  infoLbh?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  jumlahPenerimaManfaat?: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  konfirmasiData!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  noReg?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pernahKlien?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pernahPpLain?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ppLain?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  regDate?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  relasiWakilClient?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  setujuAdvokasi!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statusPerwakilan?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updatedBy?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  waktuPernahKlien?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  whyLbh?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tahap?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  wakil_Id?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  case_applicationTocase?: number | null;

  case?: Renamedcase | null;

  wakilId?: Person | null;

  clients?: Client[];

  LogRequest?: LogRequest[];
}
