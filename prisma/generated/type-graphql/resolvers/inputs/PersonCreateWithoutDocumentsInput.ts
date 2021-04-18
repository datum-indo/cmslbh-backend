import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateNestedManyWithoutWakilIdInput } from "../inputs/ApplicationCreateNestedManyWithoutWakilIdInput";
import { CaseKorbanCreateNestedManyWithoutPersonIdInput } from "../inputs/CaseKorbanCreateNestedManyWithoutPersonIdInput";
import { CasePelakuCreateNestedManyWithoutPersonIdInput } from "../inputs/CasePelakuCreateNestedManyWithoutPersonIdInput";
import { CaseReferralCreateNestedManyWithoutClientInput } from "../inputs/CaseReferralCreateNestedManyWithoutClientInput";
import { ClientCreateNestedManyWithoutPersonIdInput } from "../inputs/ClientCreateNestedManyWithoutPersonIdInput";
import { LogRequestCreateNestedManyWithoutPersonIdInput } from "../inputs/LogRequestCreateNestedManyWithoutPersonIdInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonCreateWithoutDocumentsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  agama?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alamatDomisili?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alamatId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alatBantu?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alias?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createdBy?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  disabilitas!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distrikDomisili?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distrikId?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  domisiliSama!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  golDarah?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  jenisDisabilitas?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  jenisDomisili?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  orientasiSeksual?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  jenisId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  jenisKelamin?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  jmlAnggota?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  namaLengkap?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nomorId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pekerjaan?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pekerjaanLokal?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pendidikan?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statusPernikahan?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  telepon?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  tglLahir?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tmpLahir?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  unitSatuan?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updatedBy?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  wargaNegara?: string | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateNestedManyWithoutWakilIdInput, {
    nullable: true
  })
  applications?: ApplicationCreateNestedManyWithoutWakilIdInput | undefined;

  @TypeGraphQL.Field(_type => CaseReferralCreateNestedManyWithoutClientInput, {
    nullable: true
  })
  CaseReferral?: CaseReferralCreateNestedManyWithoutClientInput | undefined;

  @TypeGraphQL.Field(_type => CaseKorbanCreateNestedManyWithoutPersonIdInput, {
    nullable: true
  })
  CaseKorban?: CaseKorbanCreateNestedManyWithoutPersonIdInput | undefined;

  @TypeGraphQL.Field(_type => CasePelakuCreateNestedManyWithoutPersonIdInput, {
    nullable: true
  })
  CasePelaku?: CasePelakuCreateNestedManyWithoutPersonIdInput | undefined;

  @TypeGraphQL.Field(_type => ClientCreateNestedManyWithoutPersonIdInput, {
    nullable: true
  })
  clients?: ClientCreateNestedManyWithoutPersonIdInput | undefined;

  @TypeGraphQL.Field(_type => LogRequestCreateNestedManyWithoutPersonIdInput, {
    nullable: true
  })
  LogRequest?: LogRequestCreateNestedManyWithoutPersonIdInput | undefined;
}
