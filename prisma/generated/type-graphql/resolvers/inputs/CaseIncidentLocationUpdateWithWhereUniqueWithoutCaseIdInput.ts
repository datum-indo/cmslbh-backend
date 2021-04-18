import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseIncidentLocationUpdateWithoutCaseIdInput } from "../inputs/CaseIncidentLocationUpdateWithoutCaseIdInput";
import { CaseIncidentLocationWhereUniqueInput } from "../inputs/CaseIncidentLocationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseIncidentLocationUpdateWithWhereUniqueWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CaseIncidentLocationWhereUniqueInput, {
    nullable: false
  })
  where!: CaseIncidentLocationWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseIncidentLocationUpdateWithoutCaseIdInput, {
    nullable: false
  })
  data!: CaseIncidentLocationUpdateWithoutCaseIdInput;
}
