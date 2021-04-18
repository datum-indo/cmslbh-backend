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
export class CaseModusScalarWhereInput {
  @TypeGraphQL.Field(_type => [CaseModusScalarWhereInput], {
    nullable: true
  })
  AND?: CaseModusScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseModusScalarWhereInput], {
    nullable: true
  })
  OR?: CaseModusScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseModusScalarWhereInput], {
    nullable: true
  })
  NOT?: CaseModusScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  kodeMt?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  case_id?: IntNullableFilter | undefined;
}
