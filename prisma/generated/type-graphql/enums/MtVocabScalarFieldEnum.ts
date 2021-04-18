import * as TypeGraphQL from "type-graphql";

export enum MtVocabScalarFieldEnum {
  KODE = "KODE",
  kode_induk = "kode_induk",
  level = "level",
  sembunyikan = "sembunyikan",
  teks = "teks",
  urutan = "urutan",
  kode_list_group = "kode_list_group"
}
TypeGraphQL.registerEnumType(MtVocabScalarFieldEnum, {
  name: "MtVocabScalarFieldEnum",
  description: undefined,
});
