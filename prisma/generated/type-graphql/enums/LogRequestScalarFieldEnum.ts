import * as TypeGraphQL from "type-graphql";

export enum LogRequestScalarFieldEnum {
  ID = "ID",
  isiRequest = "isiRequest",
  jenisRequest = "jenisRequest",
  statusRequest = "statusRequest",
  tanggapanRequest = "tanggapanRequest",
  tanggapanRequestIsi = "tanggapanRequestIsi",
  tglExpired = "tglExpired",
  tglRequest = "tglRequest",
  tglRespon = "tglRespon",
  updatedAt = "updatedAt",
  person = "person",
  "case" = "case",
  request_by = "request_by",
  application = "application",
  network = "network",
  request_to = "request_to"
}
TypeGraphQL.registerEnumType(LogRequestScalarFieldEnum, {
  name: "LogRequestScalarFieldEnum",
  description: undefined,
});
