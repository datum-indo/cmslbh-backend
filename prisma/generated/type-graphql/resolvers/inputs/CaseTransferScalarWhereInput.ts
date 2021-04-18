import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseTransferScalarWhereInput {
  @TypeGraphQL.Field(_type => [CaseTransferScalarWhereInput], {
    nullable: true
  })
  AND?: CaseTransferScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferScalarWhereInput], {
    nullable: true
  })
  OR?: CaseTransferScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferScalarWhereInput], {
    nullable: true
  })
  NOT?: CaseTransferScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  tglTransfer?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  catatan?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  createdBy?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  updatedBy?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  networkId?: IntNullableFilter | undefined;
}
