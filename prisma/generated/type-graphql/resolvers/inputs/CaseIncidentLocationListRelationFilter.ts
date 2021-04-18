import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseIncidentLocationWhereInput } from "../inputs/CaseIncidentLocationWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseIncidentLocationListRelationFilter {
  @TypeGraphQL.Field(_type => CaseIncidentLocationWhereInput, {
    nullable: true
  })
  every?: CaseIncidentLocationWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseIncidentLocationWhereInput, {
    nullable: true
  })
  some?: CaseIncidentLocationWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseIncidentLocationWhereInput, {
    nullable: true
  })
  none?: CaseIncidentLocationWhereInput | undefined;
}
