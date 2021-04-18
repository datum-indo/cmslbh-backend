import * as TypeGraphQL from "type-graphql";

export enum LogRequestAppScalarFieldEnum {
  id = "id",
  log_request_id = "log_request_id",
  app_consultation = "app_consultation",
  keterangan = "keterangan"
}
TypeGraphQL.registerEnumType(LogRequestAppScalarFieldEnum, {
  name: "LogRequestAppScalarFieldEnum",
  description: undefined,
});
