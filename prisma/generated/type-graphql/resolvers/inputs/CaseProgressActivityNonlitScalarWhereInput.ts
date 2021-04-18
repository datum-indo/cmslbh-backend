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
export class CaseProgressActivityNonlitScalarWhereInput {
  @TypeGraphQL.Field(_type => [CaseProgressActivityNonlitScalarWhereInput], {
    nullable: true
  })
  AND?: CaseProgressActivityNonlitScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityNonlitScalarWhereInput], {
    nullable: true
  })
  OR?: CaseProgressActivityNonlitScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityNonlitScalarWhereInput], {
    nullable: true
  })
  NOT?: CaseProgressActivityNonlitScalarWhereInput[] | undefined;

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
  case_progress_activity_id?: IntNullableFilter | undefined;
}
