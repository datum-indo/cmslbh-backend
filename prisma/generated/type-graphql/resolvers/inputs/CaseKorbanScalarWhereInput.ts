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
export class CaseKorbanScalarWhereInput {
  @TypeGraphQL.Field(_type => [CaseKorbanScalarWhereInput], {
    nullable: true
  })
  AND?: CaseKorbanScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseKorbanScalarWhereInput], {
    nullable: true
  })
  OR?: CaseKorbanScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseKorbanScalarWhereInput], {
    nullable: true
  })
  NOT?: CaseKorbanScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  case_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  person_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  keterangan?: StringNullableFilter | undefined;
}
