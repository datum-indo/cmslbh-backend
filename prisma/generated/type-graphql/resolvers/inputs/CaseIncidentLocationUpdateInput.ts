import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RenamedcaseUpdateOneWithoutIncidentLocationsInput } from "../inputs/RenamedcaseUpdateOneWithoutIncidentLocationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseIncidentLocationUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  kodeMt?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpdateOneWithoutIncidentLocationsInput, {
    nullable: true
  })
  caseId?: RenamedcaseUpdateOneWithoutIncidentLocationsInput | undefined;
}
