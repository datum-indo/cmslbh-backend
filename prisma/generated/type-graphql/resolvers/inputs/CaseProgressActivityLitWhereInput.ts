import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityRelationFilter } from "../inputs/CaseProgressActivityRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityLitWhereInput {
  @TypeGraphQL.Field(_type => [CaseProgressActivityLitWhereInput], {
    nullable: true
  })
  AND?: CaseProgressActivityLitWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityLitWhereInput], {
    nullable: true
  })
  OR?: CaseProgressActivityLitWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityLitWhereInput], {
    nullable: true
  })
  NOT?: CaseProgressActivityLitWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => CaseProgressActivityRelationFilter, {
    nullable: true
  })
  caseProgressActivityId?: CaseProgressActivityRelationFilter | undefined;
}
