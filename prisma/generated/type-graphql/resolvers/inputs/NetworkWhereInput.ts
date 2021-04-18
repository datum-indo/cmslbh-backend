import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseReferralListRelationFilter } from "../inputs/CaseReferralListRelationFilter";
import { CaseTransferListRelationFilter } from "../inputs/CaseTransferListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { LogRequestListRelationFilter } from "../inputs/LogRequestListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NetworkWhereInput {
  @TypeGraphQL.Field(_type => [NetworkWhereInput], {
    nullable: true
  })
  AND?: NetworkWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NetworkWhereInput], {
    nullable: true
  })
  OR?: NetworkWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NetworkWhereInput], {
    nullable: true
  })
  NOT?: NetworkWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  address?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  contactPerson?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  email?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  noContact?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  provinceId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  regencyId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  type?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  status?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => CaseReferralListRelationFilter, {
    nullable: true
  })
  CaseReferral?: CaseReferralListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CaseTransferListRelationFilter, {
    nullable: true
  })
  CaseTransfer?: CaseTransferListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LogRequestListRelationFilter, {
    nullable: true
  })
  LogRequest?: LogRequestListRelationFilter | undefined;
}
