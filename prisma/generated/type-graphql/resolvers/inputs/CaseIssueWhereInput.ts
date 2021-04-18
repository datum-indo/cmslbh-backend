import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { RenamedcaseRelationFilter } from "../inputs/RenamedcaseRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseIssueWhereInput {
  @TypeGraphQL.Field(_type => [CaseIssueWhereInput], {
    nullable: true
  })
  AND?: CaseIssueWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseIssueWhereInput], {
    nullable: true
  })
  OR?: CaseIssueWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseIssueWhereInput], {
    nullable: true
  })
  NOT?: CaseIssueWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => RenamedcaseRelationFilter, {
    nullable: true
  })
  caseId?: RenamedcaseRelationFilter | undefined;
}
