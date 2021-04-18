import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ClientMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alamatLokasi!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  asetGedung!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  asetKios!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  asetLahanGarapan!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  asetLapak!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  asetMobil!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  asetMotor!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  asetRumah!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  asetTanah!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  asetToko!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  asetWarung!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createdBy!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pendapatan!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  sktm!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sktmUpload!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  stmKeterangan!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  tanggunganAnak!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  tanggunganFamili!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  tanggunganLain!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  tanggunganPasangan!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updatedBy!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  usiaSaatKlien!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  person!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  application!: number | null;
}
