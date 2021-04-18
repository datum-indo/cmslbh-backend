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
export class CaseIncidentLocationWhereInput {
  @TypeGraphQL.Field(_type => [CaseIncidentLocationWhereInput], {
    nullable: true
  })
  AND?: CaseIncidentLocationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseIncidentLocationWhereInput], {
    nullable: true
  })
  OR?: CaseIncidentLocationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseIncidentLocationWhereInput], {
    nullable: true
  })
  NOT?: CaseIncidentLocationWhereInput[] | undefined;

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
