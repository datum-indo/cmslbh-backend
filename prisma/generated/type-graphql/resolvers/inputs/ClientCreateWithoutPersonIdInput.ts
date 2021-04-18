import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateNestedOneWithoutClientsInput } from "../inputs/ApplicationCreateNestedOneWithoutClientsInput";
import { LogRequestCreateNestedManyWithoutClientInput } from "../inputs/LogRequestCreateNestedManyWithoutClientInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientCreateWithoutPersonIdInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alamatLokasi?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  asetGedung?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  asetKios?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  asetLahanGarapan?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  asetLapak?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  asetMobil?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  asetMotor?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  asetRumah?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  asetTanah?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  asetToko?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  asetWarung?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createdBy?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pendapatan?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  sktm!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sktmUpload?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  stmKeterangan?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  tanggunganAnak?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  tanggunganFamili?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  tanggunganLain?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  tanggunganPasangan?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updatedBy?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  usiaSaatKlien?: number | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateNestedOneWithoutClientsInput, {
    nullable: true
  })
  applicationId?: ApplicationCreateNestedOneWithoutClientsInput | undefined;

  @TypeGraphQL.Field(_type => LogRequestCreateNestedManyWithoutClientInput, {
    nullable: true
  })
  LogRequest?: LogRequestCreateNestedManyWithoutClientInput | undefined;
}
