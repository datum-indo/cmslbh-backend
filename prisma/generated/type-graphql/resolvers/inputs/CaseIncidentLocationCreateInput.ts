import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateNestedOneWithoutIncidentLocationsInput } from "../inputs/RenamedcaseCreateNestedOneWithoutIncidentLocationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseIncidentLocationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  kodeMt?: string | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateNestedOneWithoutIncidentLocationsInput, {
    nullable: true
  })
  caseId?: RenamedcaseCreateNestedOneWithoutIncidentLocationsInput | undefined;
}
