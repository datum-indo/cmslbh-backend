import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { LogRequest } from "../models/LogRequest";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class LogRequestApp {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  log_request_id?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  app_consultation?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  keterangan?: string | null;

  appConsultation?: User | null;

  logRequestId?: LogRequest | null;
}
