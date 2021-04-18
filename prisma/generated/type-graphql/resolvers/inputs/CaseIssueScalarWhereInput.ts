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
export class CaseIssueScalarWhereInput {
  @TypeGraphQL.Field(_type => [CaseIssueScalarWhereInput], {
    nullable: true
  })
  AND?: CaseIssueScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseIssueScalarWhereInput], {
    nullable: true
  })
  OR?: CaseIssueScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseIssueScalarWhereInput], {
    nullable: true
  })
  NOT?: CaseIssueScalarWhereInput[] | undefined;

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
