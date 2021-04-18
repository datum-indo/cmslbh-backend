import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestAppScalarWhereInput {
  @TypeGraphQL.Field(_type => [LogRequestAppScalarWhereInput], {
    nullable: true
  })
  AND?: LogRequestAppScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppScalarWhereInput], {
    nullable: true
  })
  OR?: LogRequestAppScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppScalarWhereInput], {
    nullable: true
  })
  NOT?: LogRequestAppScalarWhereInput[] | undefined;

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
}
