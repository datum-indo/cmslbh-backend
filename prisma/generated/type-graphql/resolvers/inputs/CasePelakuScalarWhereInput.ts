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
export class CasePelakuScalarWhereInput {
  @TypeGraphQL.Field(_type => [CasePelakuScalarWhereInput], {
    nullable: true
  })
  AND?: CasePelakuScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePelakuScalarWhereInput], {
    nullable: true
  })
  OR?: CasePelakuScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePelakuScalarWhereInput], {
    nullable: true
  })
  NOT?: CasePelakuScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  jenisPelaku?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  case_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  person_id?: IntNullableFilter | undefined;
}
