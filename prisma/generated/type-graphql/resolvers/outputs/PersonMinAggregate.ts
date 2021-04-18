import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class PersonMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  agama!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alamatDomisili!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alamatId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alatBantu!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alias!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createdBy!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disabilitas!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distrikDomisili!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distrikId!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  domisiliSama!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  golDarah!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  jenisDisabilitas!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  jenisDomisili!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  orientasiSeksual!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  jenisId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  jenisKelamin!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  jmlAnggota!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  namaLengkap!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nomorId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pekerjaan!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pekerjaanLokal!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pendidikan!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statusPernikahan!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  telepon!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  tglLahir!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tmpLahir!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  unitSatuan!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updatedBy!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  wargaNegara!: string | null;
}
