import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { LogRequestRelationFilter } from "../inputs/LogRequestRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestAppWhereInput {
  @TypeGraphQL.Field(_type => [LogRequestAppWhereInput], {
    nullable: true
  })
  AND?: LogRequestAppWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppWhereInput], {
    nullable: true
  })
  OR?: LogRequestAppWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppWhereInput], {
    nullable: true
  })
  NOT?: LogRequestAppWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  log_request_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  app_consultation?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  keterangan?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  appConsultation?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LogRequestRelationFilter, {
    nullable: true
  })
  logRequestId?: LogRequestRelationFilter | undefined;
}
