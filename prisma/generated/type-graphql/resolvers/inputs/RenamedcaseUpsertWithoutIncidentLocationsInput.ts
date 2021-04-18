import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateWithoutIncidentLocationsInput } from "../inputs/RenamedcaseCreateWithoutIncidentLocationsInput";
import { RenamedcaseUpdateWithoutIncidentLocationsInput } from "../inputs/RenamedcaseUpdateWithoutIncidentLocationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpsertWithoutIncidentLocationsInput {
  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutIncidentLocationsInput, {
    nullable: false
  })
  update!: RenamedcaseUpdateWithoutIncidentLocationsInput;

  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutIncidentLocationsInput, {
    nullable: false
  })
  create!: RenamedcaseCreateWithoutIncidentLocationsInput;
}
