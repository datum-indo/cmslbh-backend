import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { NetworkRelationFilter } from "../inputs/NetworkRelationFilter";
import { RenamedcaseRelationFilter } from "../inputs/RenamedcaseRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseTransferWhereInput {
  @TypeGraphQL.Field(_type => [CaseTransferWhereInput], {
    nullable: true
  })
  AND?: CaseTransferWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferWhereInput], {
    nullable: true
  })
  OR?: CaseTransferWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferWhereInput], {
    nullable: true
  })
  NOT?: CaseTransferWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => NetworkRelationFilter, {
    nullable: true
  })
  network?: NetworkRelationFilter | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseRelationFilter, {
    nullable: true
  })
  case?: RenamedcaseRelationFilter | undefined;
}
